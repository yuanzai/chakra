import * as React from 'react'

import {
    createColumnHelper, ExpandedState,
    flexRender,
    getCoreRowModel, getExpandedRowModel, getFilteredRowModel,
    useReactTable
} from '@tanstack/react-table'
import {Box, Link, Table, Tbody, Td, Tfoot, Th, Thead, Tr, Text} from "@chakra-ui/react";
import {NumericFormat} from "react-number-format";
import {ColumnDef} from "@tanstack/table-core/src/types";

export type SubrowData = {
    firstCol: string
    url:string
    value1: number
    perc1: number
    value2: number
    perc2: number
    value3: number
    perc3: number
    subrows: SubrowData[]
}

const columnHelper = createColumnHelper<SubrowData>()

const columns = [
    columnHelper.accessor('firstCol', {
        cell: ({row, getValue}) => (
            <Text
                pl={
                    // Since rows are flattened by default,
                    // we can use the row.depth property
                    // and paddingLeft to visually indicate the depth
                    // of the row
                    `${row.depth * 2}rem`
                }
                // href={`/list-view/${row.getValue("value1")}`}
            >
                <>
                    {' '}
                    {row.getCanExpand() ? (
                        <button
                            {...{
                                onClick: row.getToggleExpandedHandler(),
                                style: {cursor: 'pointer'},
                            }}
                        >
                            {row.getIsExpanded() ? '➖' : '➕'}
                        </button>
                    ) : (
                        ' '
                    )}{' '}
                    {
                        <Link href={row.original.url}>
                            {getValue()}
                        </Link>
                    }
                </>
            </Text>),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('value1', {
        cell: info => <NumericFormat displayType="text" value={info.renderValue()} prefix="$" thousandSeparator=","/>,
        header: () => "Value 1",
        footer: info => info.column.id,
        meta: {isNumeric: true},
    }),
    columnHelper.accessor('perc1', {
        header: () => 'Perc 1',
        cell: info => <NumericFormat displayType="text" value={info.renderValue()} suffix="%" thousandSeparator=","/>,
        footer: info => info.column.id,
        meta: {isNumeric: true},

    }),
    columnHelper.accessor('value2', {
        cell: info => <i>{info.renderValue()}</i>,
        header: () => "Value 2",
        footer: info => info.column.id,
    }),
    columnHelper.accessor('perc2', {
        header: () => 'Perc 2',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('value3', {
        cell: info => <i>{info.renderValue()}</i>,
        header: () => "Value 3",
        footer: info => info.column.id,
    }),
    columnHelper.accessor('perc3', {
        header: () => 'Perc 3',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
    }),
]

const data: SubrowData[] = [
    {
        firstCol: "Total",
        url: "/url1",
        value1: 900,
        perc1: 100,
        value2: 100,
        perc2: 1,
        value3: 100,
        perc3: 1,
        subrows: [
            {
                firstCol: "SubTotal1",
                url: "/url2",
                value1: 100,
                perc1: 1,
                value2: 100,
                perc2: 1,
                value3: 100,
                perc3: 1,
                subrows: [],
            },
            {
                firstCol: "SubTotal2",
                url: "/url3",
                value1: 100,
                perc1: 1,
                value2: 100,
                perc2: 1,
                value3: 100,
                perc3: 1,
                subrows: [],
            }
        ],
    }
]
type GenericTableProps<T> = {
    data: T[]
    columns: ColumnDef<T, any>[]
    subrows?: (originalRow: T, index: number) => undefined | T[]
}
export default function GenericTable<T>(props: GenericTableProps<T>) {
    const rerender = React.useReducer(() => ({}), {})[1]

    const [expanded, setExpanded] = React.useState<ExpandedState>({})

    const table = useReactTable({
        data: props.data,
        columns: props.columns,
        state: {
            expanded,
        },
        onExpandedChange: setExpanded,
        getSubRows: props.subrows,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        debugTable: true,
    })

    return (
        <Box borderWidth='1px' borderRadius='lg' p="5">
            <Table size="sm">
                <Thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <Th key={header.id}
                                    isNumeric={header.column.columnDef.meta?.isNumeric ?? false}>
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
                <Tbody>
                    {table.getRowModel().rows.map(row => (
                        <Tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <Td key={cell.id}
                                    isNumeric={cell.column.columnDef.meta?.isNumeric ?? false}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    )
}
