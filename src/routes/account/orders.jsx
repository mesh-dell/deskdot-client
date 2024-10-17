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

import { Link, useLoaderData } from "react-router-dom";

export default function Orders() {
  const { orders } = useLoaderData();

  const calculateTotal = (order) => {
    let totalCost = 0;

    order.items.forEach((item) => {
      const itemCost = parseFloat(item.price) * parseInt(item.quantity);
      totalCost += itemCost;
    });

    return totalCost;
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleString();
  };

  return (
    <div className="text-dark-green">
      <h1 className="font-semibold">Your Orders</h1>

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
            {orders.orders.map((order) => (
              <Tr key={order.order_id}>
                <Td>{order.order_id}</Td>
                <Td>{formatDate(order.order_date)}</Td>
                <Td>Ksh. {calculateTotal(order)}</Td>
                <Td>
                  <Link
                    className="underline"
                    to={`/account/orders/${order.order_id}`}
                  >
                    Expand
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
