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

export default function PersonalInfo({ profile }) {
  return (
    <TableContainer className="font-sans text-dark-green">
      <Table variant="striped" size={"md"}>
        <TableCaption>Your Personal Info</TableCaption>
        <Thead>
          <Tr>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{profile.first_name}</Td>
            <Td>{profile.last_name}</Td>
            <Td>{profile.email}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
