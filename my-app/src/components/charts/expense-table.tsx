import * as React from 'react'

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import {Box, space, Table, Tbody, Td, Tfoot, Th, Thead, Tr} from "@chakra-ui/react";
import {Person} from './tanstack-table';
import {NumericFormat} from "react-number-format";

export type IncomeColumn = {
    rent: number
    vacancy: number
    taxes: number
    insurance: number
    hoa: number
    propertyManagement: number
    repairsAndMaintenance: number
    turnoverCosts: number
    columnType: string
}

export type IncomeCalculatedColumn = IncomeColumn & {
    netRevenue: number
    totalExpenses: number
    noi: number
    noiMargin: number
}

export type IncomeCalculatedRow = {
    net_revenue: number
    total_expenses: number
    noi: number
    noi_margin: number
}

// function constructDataAndColumns(columns: IncomeColumn[]): [any[], any[]] {
//     for
//     return null, null
// }


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


export enum NumericType {
    space,
    dollar,
    percent
}

export type incomeRow = {
    field?: string,
    valueFromCol?: (col: IncomeCalculatedColumn) => string
    borderOnTop?: boolean
    space?: boolean

    rowType: NumericType
}
export const rowHeaders: incomeRow[] = [
    {
        field: "Rent",
        valueFromCol: col => col.rent.toString(),
        rowType: NumericType.dollar
    },
    {
        field: "Vacancy",
        valueFromCol: col => col.vacancy.toString(),
        rowType: NumericType.dollar
    },
    {
        field: "Net Revenue",
        valueFromCol: col => col.netRevenue.toString(),
        borderOnTop: true,
        rowType: NumericType.dollar
    },
    {
        rowType: NumericType.space
    },
    {
        field: "Taxes",
        valueFromCol: col => col.taxes.toString(),
        rowType: NumericType.dollar
    },
    {
        field: "Insurance",
        valueFromCol: col => col.insurance.toString(),
        rowType: NumericType.dollar
    },
    {
        field: "HOA",
        valueFromCol: col => col.hoa.toString(),
        rowType: NumericType.dollar
    },
    {
        field: "Property Management",
        valueFromCol: col => col.propertyManagement.toString(),
        rowType: NumericType.dollar
    },
    {
        field: "Repairs And Maintenance",
        valueFromCol: col => col.repairsAndMaintenance.toString(),
        rowType: NumericType.dollar
    },
    {
        field: "Turnover Costs",
        valueFromCol: col => col.turnoverCosts.toString(),
        rowType: NumericType.dollar
    },
    {
        field: "Total Expenses",
        valueFromCol: col => col.totalExpenses.toString(),
        borderOnTop: true,
        rowType: NumericType.dollar
    },
    {
        rowType: NumericType.space
    },
    {
        field: "NOI",
        valueFromCol: col => col.noi.toString(),
        rowType: NumericType.dollar
    },
    {
        field: "NOI Margin",
        valueFromCol: col => col.noiMargin.toString(),
        rowType: NumericType.percent
    },
]

export const data2: IncomeCalculatedColumn[] = [
    {
        rent: 2000,
        vacancy: -100,
        taxes: 100,
        insurance: 200,
        hoa: 100,
        propertyManagement: 400,
        repairsAndMaintenance: 600,
        turnoverCosts: 200,
        columnType: "Monthly",
        netRevenue: 1900,
        totalExpenses: 1600,
        noi: 200,
        noiMargin: 0.6,
    },
    {
        rent: 2000,
        vacancy: -100,
        taxes: 100,
        insurance: 200,
        hoa: 100,
        propertyManagement: 400,
        repairsAndMaintenance: 600,
        turnoverCosts: 200,
        columnType: "TTM",
        netRevenue: 1900,
        totalExpenses: 1600,
        noi: 200,
        noiMargin: 0.6,
    },
    {
        rent: 2000,
        vacancy: -100,
        taxes: 100,
        insurance: 200,
        hoa: 100,
        propertyManagement: 400,
        repairsAndMaintenance: 600,
        turnoverCosts: 200,
        columnType: "Pro Forma",
        netRevenue: 1900,
        totalExpenses: 1600,
        noi: 200,
        noiMargin: 0.6,
    }
]



const MyTanTable: React.FC = () => {
    return (
        <Box borderWidth='1px' borderRadius='lg' p="5">
            <Table size="sm" py="1px">
                <Thead>
                    <Tr key="header" py="2" bg="blue.50">
                        <Th key="header">
                            Description
                        </Th>
                        {data2.map((col, i) => (

                            <Th isNumeric key={i} width="20%">
                                {col.columnType}
                            </Th>

                        ))}
                    </Tr>
                </Thead>
                <Tbody fontWeight="normal">
                    {rowHeaders.map((row, rowNo) => (
                        <Tr key={rowNo} borderTop={row.borderOnTop ? "solid" : "none"}>
                            <Td py="1">{row.field}</Td>
                            {data2.map((col, colNo) => (
                                <Td isNumeric py="1">
                                    <NumericFormat displayType="text"
                                                   value={row.valueFromCol ? row.valueFromCol(col) : ""}
                                                   prefix={row.rowType === NumericType.dollar ? "$" : ""}
                                                   suffix={row.rowType === NumericType.percent ? "%" : ""}
                                                   thousandSeparator=","/>
                                </Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    )
}

export default MyTanTable;
