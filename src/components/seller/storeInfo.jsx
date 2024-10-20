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

export default function StoreInfo({ profile }) {
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
            <Td>{profile.store_name}</Td>
            <Td>{profile.store_description}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
