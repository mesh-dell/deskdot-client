import NavBar from "../../components/home/navbar";
import BreadCrumb from "../../components/shop/breadcrumb";
import ProductRow from "../../components/shop/productRow";

export default function Shop() {
  return (
    <div className="mx-6 *:mb-10 md:mx-10">
      <NavBar /> <BreadCrumb /> <ProductRow /> <ProductRow /> <ProductRow />
    </div>
  );
}
