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

export default function Orders() {
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
            <Tr>
              <Td>34</Td>
              <Td>24th June 2024</Td>
              <Td>Ksh. 779</Td>
              <Td>
                <Link className="underline" to={`/account/orders/34`}>Expand</Link>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
