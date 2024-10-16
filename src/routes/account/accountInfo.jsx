import PersonalInfo from "../../components/account/personalInfo";
import RecentOrders from "../../components/account/recentOrders";
import { useLoaderData } from "react-router-dom";
import { getProfile } from "../../services/userService";
export async function loader() {
  const user = JSON.parse(localStorage.getItem("user"));
  const profile = await getProfile(user);
  return { profile };
}
export default function AccountInfo() {
  const { profile } = useLoaderData();

  return (
    <div>
      <PersonalInfo profile={profile} />
      <RecentOrders />
    </div>
  );
}
