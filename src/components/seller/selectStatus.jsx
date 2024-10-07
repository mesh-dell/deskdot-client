import { Select } from "@chakra-ui/react";

export default function SelectStatus() {
  return (
    <Select placeholder="Select status" id="status">
      <option value="shipped">Shipped</option>
      <option value="pending">Pending</option>
      <option value="delivered">Delivered</option>
    </Select>
  );
}
