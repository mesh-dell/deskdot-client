import PersonalInfo from "../../components/account/personalInfo";
import StoreInfo from "../../components/seller/storeInfo";
import RecentOrders from "../../components/seller/recentOrders";

export default function AccountInfoSeller() {
  return (
    <div>
      <PersonalInfo />
      <StoreInfo />
      <RecentOrders />
    </div>
  );
}
