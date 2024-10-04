import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import OrderItem from "../../components/orders/orderItem";

export default function OrderDetails() {
  return (
    <div className="text-dark-green space-y-5">
      <div className="flex justify-between mb-5 items-center">
        <h1 className="font-semibold">Order Details</h1>
        <button className="bg-light-green font-semibold px-6 py-2 rounded-md">Cancel</button>
      </div>

      <TableContainer className="font-sans text-dark-green">
        <Table variant="striped" size={"md"}>
          <TableCaption>Your Orders</TableCaption>
          <Thead>
            <Tr>
              <Th>#Order ID</Th>
              <Th>Order Date</Th>
              <Th>Order Cost</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>34</Td>
              <Td>24th June 2024</Td>
              <Td>Ksh. 779</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <OrderItem />
    </div>
  );
}
