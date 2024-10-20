import { Select } from "@chakra-ui/react";
import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();
import { updateStatus } from "../../services/orderService";
import { useState } from "react";

export default function SelectStatus({ status, id }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const [currentstatus, setStatus] = useState(status);

  const handleChange = async (event) => {
    const status = event.target.value;

    if (status) {
      try {
        await updateStatus(user, id, { status });
        setStatus(status);
        toast({
          title: "Success.",
          description: "Status updated succesfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Select
      placeholder="Select status"
      value={currentstatus}
      onChange={handleChange}
    >
      <option value="shipped">Shipped</option>
      <option value="pending">Pending</option>
      <option value="delivered">Delivered</option>
    </Select>
  );
}
