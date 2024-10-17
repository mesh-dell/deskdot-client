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
  return (
    <TableContainer className="font-sans text-dark-green">
      <Table variant="striped" size={"md"}>
        <TableCaption>Your Recent Orders</TableCaption>
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
              <Td>{order.order_date}</Td>
              <Td>ksh. 500</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
