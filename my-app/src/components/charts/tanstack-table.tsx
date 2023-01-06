import * as React from 'react'

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import {Box, Table, Tbody, Td, Tfoot, Th, Thead, Tr} from "@chakra-ui/react";

export type Person = {
    firstName: string
    lastName: string
    age: number
    visits: number
    status: string
    progress: number
}

const columnHelper = createColumnHelper<Person>()

const columns = [
    columnHelper.accessor('firstName', {
        cell: info => info.getValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor(row => row.lastName, {
        id: 'lastName',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Last Name</span>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor('age', {
        header: () => 'Age',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('visits', {
        header: () => <span>Visits</span>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor('status', {
        header: 'Status',
        footer: info => info.column.id,
    }),
    columnHelper.accessor('progress', {
        header: 'Profile Progress',
        footer: info => info.column.id,
    }),
]

const MyTanTable: React.FC<{ data: any[] }> = ({data}) => {
    const rerender = React.useReducer(() => ({}), {})[1]

    const table = useReactTable({
        data: data,
        columns: columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <Box borderWidth='1px' borderRadius='lg'>
            <Table size="sm">
                <Thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <Tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <Th key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                            </Th>
                        ))}
                    </Tr>
                ))}
                </Thead>
                <Tbody p="1px">
                {table.getRowModel().rows.map(row => (
                    <Tr key={row.id}  p="1px" borderBottom="solid">
                        {row.getVisibleCells().map(cell => (
                            <Td key={cell.id} py="1px">
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </Td>
                        ))}
                    </Tr>
                ))}
                </Tbody>
                <Tfoot>
                {table.getFooterGroups().map(footerGroup => (
                    <Tr key={footerGroup.id}>
                        {footerGroup.headers.map(header => (
                            <Th key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.footer,
                                        header.getContext()
                                    )}
                            </Th>
                        ))}
                    </Tr>
                ))}
                </Tfoot>
            </Table>
        </Box>
    )
}

export default MyTanTable;
