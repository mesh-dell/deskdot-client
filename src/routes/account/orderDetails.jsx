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
    <div className="space-y-5 text-dark-green">
      <div className="mb-5 flex items-center justify-between">
        <h1 className="font-semibold">Order Details</h1>
        <button className="rounded-md bg-light-green px-6 py-2 font-semibold">
          Cancel
        </button>
      </div>

      <TableContainer className="font-sans text-dark-green">
        <Table variant="striped" size={"md"}>
          <TableCaption>Your Order</TableCaption>
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

      <div className="grid-cols-2 gap-4 space-y-4 md:grid md:space-y-0">
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
    </div>
  );
}
