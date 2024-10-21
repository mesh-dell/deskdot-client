import { Link } from "react-router-dom";
import { deleteProduct } from "../../services/productService";
import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();
export default function ProductCard({
  id,
  name,
  quantity,
  price,
  handleDelete,
}) {
  const handleClick = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      await deleteProduct(id, user);
      handleDelete(id);
      toast({
        title: "Success.",
        description: "Deleted product succesfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      if (error.status === 403) {
        toast({
          title: "Warning.",
          description:
            "Cannot delete a product that has already been ordered.!",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };
  return (
    <div className="flex flex-col items-center space-y-3 bg-light-white py-2 text-center text-dark-green md:flex md:flex-row md:py-0 md:text-left">
      <div className="h-40 w-40 bg-light-grey">Image</div>
      <div className="space-y-3 md:ml-5">
        <h1 className="font-semibold">{name}</h1>
        <div className="flex justify-center space-x-3 md:justify-start">
          <h2>Quantity</h2>
          <h2>{quantity}</h2>
        </div>
        <h2>Ksh {price}</h2>
      </div>
      <div className="space-x-3 underline md:mx-16">
        <Link to={`/seller/products/${id}/edit`}>Edit</Link>
        <button className="text-light-grey underline" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
