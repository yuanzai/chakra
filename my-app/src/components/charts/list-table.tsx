import * as React from "react";
import {Box, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {NumericFormat} from "react-number-format";
import {NumericType} from "./expense-table";

const ListTable: React.FC<{ data: any[] }> = ({data}) => {
    return (
        <Box overflowX="auto" width="100%">
            <Table size={"sm"}>
                <Thead position="sticky" top={0}>
                    <Tr bg="blue.50">
                        <Th>First Name</Th>
                        <Th>Last Name</Th>
                        <Th>Address 1</Th>
                        <Th>Address 2</Th>
                        <Th>Address 3</Th>
                        <Th>Address 4</Th>
                        <Th>Address 5</Th>
                        <Th isNumeric>Desc 1</Th>
                        <Th isNumeric>Desc 2</Th>
                        <Th isNumeric>Desc 3</Th>
                        <Th isNumeric>Desc 4</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map(({first_name, last_name, a1, a2, a3, a4, a5,d1,d2,d3,d4}) => (
                        <Tr>
                            <Td>{first_name}</Td>
                            <Td>{last_name}</Td>
                            <Td>{a1}</Td>
                            <Td>{a2}</Td>
                            <Td>{a3}</Td>
                            <Td>{a4}</Td>
                            <Td>{a5}</Td>
                            <Td isNumeric>
                                <NumericFormat displayType="text"
                                               value={d1}
                                               prefix="$"
                                               thousandSeparator=","/></Td>
                            <Td isNumeric>
                                <NumericFormat displayType="text"
                                               value={d2}
                                               prefix="$"
                                               thousandSeparator=","/></Td>
                            <Td isNumeric><NumericFormat displayType="text"
                                               value={d3}
                                               prefix="$"
                                               thousandSeparator=","/></Td>
                            <Td isNumeric><NumericFormat displayType="text"
                                               value={d4}
                                               prefix="$"
                                               thousandSeparator=","/></Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    )
}

export default ListTable;
