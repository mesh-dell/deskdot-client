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

import SelectStatus from "../../components/seller/selectStatus";
import { useLoaderData } from "react-router-dom";

export default function OrdersSeller() {
  const { orders } = useLoaderData();

  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleString();
  };

  return (
    <div className="space-y-10 text-dark-green">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold">Your Orders</h1>
      </div>

      <TableContainer className="font-sans text-dark-green">
        <Table variant="striped" size={"md"}>
          <TableCaption>Your Orders</TableCaption>
          <Thead>
            <Tr>
              <Th>#Order ID</Th>
              <Th>#Product ID</Th>
              <Th>Quantity</Th>
              <Th>Status</Th>
              <Th>Order Date</Th>
              <Th>Order Cost</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders.map((order) => (
              <Tr key={order.order_item_id}>
                <Td>{order.order_id}</Td>
                <Td>{order.product_id}</Td>
                <Td>{order.quantity}</Td>
                <Td>
                  <SelectStatus
                    status={order.status}
                    id={order.order_item_id}
                  />
                </Td>
                <Td>{formatDate(order.order_date)}</Td>
                <Td>Ksh. {parseFloat(order.price) * order.quantity}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
