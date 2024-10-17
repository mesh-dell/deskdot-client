import PersonalInfo from "../../components/account/personalInfo";
import RecentOrders from "../../components/account/recentOrders";
import { useLoaderData } from "react-router-dom";
import { getProfile } from "../../services/userService";
import { refreshToken } from "../../services/authService";
import { getOrders } from "../../services/orderService";

export async function loader() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return { error: "You must login to access this page" };
  }
  try {
    const profile = await getProfile(user);
    const orders = await getOrders(user);
    return { profile, orders };
  } catch (error) {
    if (error.status === 401) {
      // Refresh token
      const payload = {
        refreshToken: user.refreshToken,
        role: "buyer",
      };
      try {
        const { accessToken } = await refreshToken(payload);
        const updatedUser = { ...user, accessToken };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        const profile = await getProfile(updatedUser);
        const orders = await getOrders(updatedUser);
        return { profile, accessToken, orders };
      } catch (error) {
        if (error.status === 403) {
          return redirect("/signin");
        }
      }
    }
    return { error };
  }
}

export default function AccountInfo() {
  const { profile, orders } = useLoaderData();

  return (
    <div>
      <PersonalInfo profile={profile} />
      <RecentOrders orders={orders} />
    </div>
  );
}
