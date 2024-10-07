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

export default function StoreInfo() {
  return (
    <TableContainer className="font-sans text-dark-green">
      <Table variant="striped" size={"md"}>
        <TableCaption>Your Store Info</TableCaption>
        <Thead>
          <Tr>
            <Th>Store Name</Th>
            <Th>Store Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Corvette Stationery</Td>
            <Td>
              Take your love for speed and style to a whole new level with our
              exclusive Corvette stationery collection!
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
