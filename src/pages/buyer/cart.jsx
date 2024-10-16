import NavBar from "../../components/home/navbar";
import CartProduct from "../../components/cart/cartProduct";
import OrderSummary from "../../components/cart/orderSummary";

import { getCart } from "../../services/cartService";
import { refreshToken } from "../../services/authService";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext, useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import { getProduct } from "../../services/productService";

import { createStandaloneToast } from "@chakra-ui/react";
const { toast } = createStandaloneToast();

export async function loader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    toast({
      title: "Info.",
      description: "Only registered users can access cart.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
    return { error: "Only registered users can access cart." };
  }
  try {
    const cart = await getCart(user);

    return { cart };
  } catch (error) {
    if (error.status === 401) {
      const payload = {
        refreshToken: user.refreshToken,
        role: "buyer",
      };
      try {
        const { accessToken } = await refreshToken(payload);

        const updatedUser = { ...user, accessToken };
        localStorage.setItem("user", JSON.stringify(updatedUser));

        const cart = await getCart(updatedUser);
        return { cart, accessToken };
      } catch (error) {
        if (error.status === 403) {
          return redirect("/signin");
        }
      }
    }

    if (error.status === 404) {
      toast({
        title: "Info.",
        description: "You have no items in cart.",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }

    return { error };
  }
}

export default function Cart() {
  const [subTotal, setSubtotal] = useState(0);

  const handleSubtotalChange = (subtotal) => {
    setSubtotal((prevTotal) => prevTotal + subtotal);
  };

  const handleRemove = (id) => {
    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product.cart_item_id !== id),
    );
  };

  const loaderData = useLoaderData();
  const { setLogin, user } = useContext(AuthContext);
  const { cart } = loaderData;

  useEffect(() => {
    if (loaderData?.accessToken) {
      const updatedUser = { ...user, accessToken: loaderData.accessToken };
      setLogin(updatedUser);
    }
  }, [loaderData?.accessToken, setLogin]);

  const [cartProducts, setCartProducts] = useState([]);

  // Fetch product details for cart items
  useEffect(() => {
    if (cart) {
      const fetchCartProducts = async () => {
        const fetchedProducts = await Promise.all(
          cart.map(async (item) => {
            const product = await getProduct(item.product_id);
            return {
              cart_item_id: item.cart_item_id,
              quantity: item.quantity,
              product_name: product.product_name,
              price: product.price,
              stock: product.quantity,
            };
          }),
        );
        setCartProducts(fetchedProducts);
      };

      fetchCartProducts();
    }
  }, [cart]);

  const calculateTotal = () => {
    let total = 0;
    cartProducts.forEach((item) => {
      total += item.quantity * item.price;
    });
    setSubtotal(total);
  };

  useEffect(() => {
    calculateTotal();
  }, [cartProducts]);

  return (
    <div className="mx-6 *:mb-10 md:mx-10">
      <NavBar />
      {cart ? (
        <div className="justify-around space-y-5 md:flex md:space-y-0">
          <div className="space-y-4 md:w-2/5">
            {cartProducts.map((product) => (
              <CartProduct
                key={product.cart_item_id}
                id={product.cart_item_id}
                quantity={product.quantity}
                price={product.price}
                name={product.product_name}
                stock={product.stock}
                onSubtotalChange={handleSubtotalChange}
                onRemove={handleRemove}
              />
            ))}
          </div>
          <OrderSummary total={subTotal.toFixed(2)} />
        </div>
      ) : (
        <div className="text-center text-light-grey">
          Only registered users can access cart.
        </div>
      )}
    </div>
  );
}
