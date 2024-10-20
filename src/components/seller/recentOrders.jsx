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

export default function RecentOrders({ orders }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  };
  return (
    <TableContainer className="font-sans text-dark-green">
      <Table variant="striped" size={"md"}>
        <TableCaption>Your Recent Orders</TableCaption>
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
              <Td>{order.status}</Td>
              <Td>{formatDate(order.order_date)}</Td>
              <Td>ksh. {parseFloat(order.price) * order.quantity}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
