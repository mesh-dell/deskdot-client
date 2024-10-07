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

export default function OrdersSeller() {
  return (
    <div className="text-dark-green space-y-10">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold">Your Orders</h1>
        <button className="rounded-md bg-light-green px-6 py-2 font-semibold">
          Update Status
        </button>
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
            <Tr>
              <Td>34</Td>
              <Td>5</Td>
              <Td>10</Td>
              <Td>
                <SelectStatus />
              </Td>
              <Td>24th June 2024</Td>
              <Td>Ksh. 779</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
