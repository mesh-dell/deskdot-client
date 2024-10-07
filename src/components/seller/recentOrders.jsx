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

export default function RecentOrders() {
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
            <Th>Order Cost</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>34</Td>
            <Td>5</Td>
            <Td>10</Td>
            <Td>Shipped</Td>
            <Td>ksh. 890</Td>
          </Tr>
          <Tr>
            <Td>34</Td>
            <Td>5</Td>
            <Td>10</Td>
            <Td>Shipped</Td>
            <Td>ksh. 890</Td>
          </Tr>
          <Tr>
            <Td>34</Td>
            <Td>5</Td>
            <Td>10</Td>
            <Td>Shipped</Td>
            <Td>ksh. 890</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
