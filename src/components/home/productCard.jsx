import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../services/cartService";
import { createStandaloneToast } from "@chakra-ui/react";
import { refreshToken } from "../../services/authService";
import { AuthContext } from "../../context/authContext";
import { useContext, useCallback } from "react";

const { toast } = createStandaloneToast();

export default function ProductCard({ productId, price, product_name }) {
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
  }, [user, setLogin, navigate]);

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
      product_id: productId,
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
          // Retry adding to cart after successful token refresh
          handleClick();
        }
      }
      console.error(error);
    }
  };

  return (
    <Link to={`/shop/${productId}`}>
      <div className="flex w-full flex-col items-center space-y-2 bg-light-white p-3 text-center text-dark-green md:w-fit">
        <div className="h-48 w-52 bg-light-grey">Image</div>
        <h1 className="text-xl">{product_name}</h1>
        <h1 className="font-semibold">Ksh. {price}</h1>
        <button
          className="rounded-md bg-dark-green px-4 py-2 text-white"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            handleClick();
          }}
        >
          Add to cart
        </button>
      </div>
    </Link>
  );
}
