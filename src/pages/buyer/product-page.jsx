import BreadCrumb from "../../components/shop/breadcrumb";
import NavBar from "../../components/home/navbar";

import { getProduct } from "../../services/productService";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useCallback } from "react";
import { AuthContext } from "../../context/authContext";
import { addToCart } from "../../services/cartService";
import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

export async function loader({ params }) {
  const product = await getProduct(params.productId);
  return { product };
}

export default function ProductPage() {
  const { product } = useLoaderData();

  const { user, setLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleTokenRefresh = useCallback(async () => {
    if (!user) return;

    const payload = {
      refreshToken: user.refreshToken,
      role: "buyer",
    };

    try {
      const { accessToken } = await refreshToken(payload);
      const updatedUser = { ...user, accessToken: accessToken };
      setLogin(updatedUser);
      return true;
    } catch (error) {
      if (error.status === 403) {
        navigate("/signin");
      }
      return false;
    }
  }, [setLogin, navigate]);

  const handleClick = async () => {
    if (!user) {
      toast({
        title: "Info.",
        description: "Only registered users can add items to cart.",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    const payload = {
      product_id: product.product_id,
      quantity: 1,
    };
    try {
      const cartItem = await addToCart(user, payload);
      toast({
        title: "Success.",
        description: "Item added to cart.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      if (error.status === 400) {
        toast({
          title: "Warning.",
          description: "Item is already in cart.",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
      } else if (error.status === 401) {
        const refreshSuccessful = await handleTokenRefresh();
        if (refreshSuccessful) {
          try {
            const cartItem = await addToCart(user, payload);
            toast({
              title: "Success.",
              description: "Item added to cart.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
          } catch (error) {
            if (error.status === 400) {
              toast({
                title: "Warning.",
                description: "Item is already in cart.",
                status: "warning",
                duration: 5000,
                isClosable: true,
              });
            }
            console.error("Failed to add to cart after token refresh", error);
          }
        } else {
          console.error(error);
        }
      }
      console.error(error);
    }
  };

  return (
    <div className="mx-6 *:mb-10 md:mx-10">
      <NavBar />
      <BreadCrumb />
      <div className="justify-center space-y-5 text-dark-green md:flex md:space-x-9 md:space-y-0">
        <div className="h-80 bg-light-grey md:w-5/12">Image</div>
        <div className="flex flex-col justify-center space-y-3">
          <h1 className="text-2xl font-semibold">{product.product_name}</h1>
          <h2>{product.product_description}</h2>
          <h2 className="font-bold">Ksh. {product.price}</h2>
          <button
            className="rounded-lg bg-dark-green px-6 py-2 text-white"
            onClick={handleClick}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
