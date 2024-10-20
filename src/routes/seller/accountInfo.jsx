import PersonalInfo from "../../components/account/personalInfo";
import StoreInfo from "../../components/seller/storeInfo";
import RecentOrders from "../../components/seller/recentOrders";
import { useLoaderData } from "react-router-dom";

import { getProfile } from "../../services/userService";
import { getSellerOrders } from "../../services/storeService";
import { refreshToken } from "../../services/authService";
import { getOrder } from "../../services/orderService";

export async function loader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return { error: "You must login to access this page" };
  }
  try {
    const profile = await getProfile(user);
    const orders = await getSellerOrders(user);

    await Promise.all(
      orders.map(async (order) => {
        const res = await getOrder(user, order.order_id);
        order.order_date = res.order.order_date;
      }),
    );

    return { profile, orders };
  } catch (error) {
    if (error.status === 401) {
      // Refresh token
      const payload = {
        refreshToken: user.refreshToken,
        role: "seller",
      };
      try {
        const { accessToken } = await refreshToken(payload);
        const updatedUser = { ...user, accessToken };

        localStorage.setItem("user", JSON.stringify(updatedUser));
        const profile = await getProfile(updatedUser);
        const orders = await getSellerOrders(updatedUser);
        return { profile, accessToken, orders };
      } catch (error) {
        if (error.status === 403) {
          return redirect("/signin");
        }
      }
    }
    console.log(error);

    return { error };
  }
}
export default function AccountInfoSeller() {
  const { profile, orders } = useLoaderData();

  return (
    <div>
      <PersonalInfo profile={profile} />
      <StoreInfo profile={profile} />
      <RecentOrders orders={orders} />
    </div>
  );
}
