import {Text, Box, Heading, Divider, VStack} from "@chakra-ui/react";
import {DataTable, TableInstance, Button} from '@saas-ui/react'
// import * as React from "react";
import {Column} from 'react-table';
import React, {useRef} from "react";
import MyTanTable, { Person } from "../charts/tanstack-table";
import ExpenseTable from "../charts/expense-table";
import MyExcel from "../charts/excel";
//
// import {
//     createColumnHelper,
// } from '@tanstack/react-table'


type ExampleData = {
    id: number
    name: string
    email: string
}

// const columnHelper = createColumnHelper<ExampleData>()
//
// const columns = [
//     columnHelper.accessor(row => row.id, {
//         id: 'id',
//         cell: info => <i>{info.getValue()}</i>,
//         header: () => <span>ID</span>,
//         footer: info => info.column.id,
//     }),
//     columnHelper.accessor('name', {
//         header: () => 'Name',
//         cell: info => info.renderValue(),
//         footer: info => info.column.id,
//     }),
//     columnHelper.accessor('email', {
//         header: () => <span>Email</span>,
//         footer: info => info.column.id,
//     }),
// ]

const columns: Column<ExampleData>[] = [
    {
        accessor: 'id',
        Header: 'Id',
    },
    {
        accessor: 'name',
        Header: 'Name',
    },
    {
        accessor: 'email',
        Header: 'Email',
    },
]

const data: ExampleData[] = [
    {
        id: 1,
        name: 'TaShya Charles',
        email: 'urna.nec.luctus@icloud.couk'
    },
    {
        id: 2,
        name: 'Donovan Mosley',
        email: 'lacinia.mattis.integer@icloud.couk',
    },
]

const tanTableData: Person[] = [
    {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
    },
    {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
    },
    {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
    },
]

export default function Reports() {
    const tableRef = useRef<TableInstance<ExampleData>|null>(null)

    return (

        <VStack align={"left"}>
            <Text textStyle="h3">Table - selectable - SaaS UI DataTable component</Text>


            <Box overflowX="auto">
                <Button
                    onClick={() => {
                        if (tableRef && tableRef.current) {
                            tableRef.current?.toggleAllRowsSelected(
                                !tableRef.current?.isAllRowsSelected
                            )
                        }
                    }
                    }
                    label="Select all rows"
                />
                <DataTable
                    ref={tableRef}
                    columns={columns}
                    isSelectable
                    onSelectedRowsChange={(selected) => console.log(selected)}
                    data={data}/>
            </Box>


            <Box overflowX="auto">
                <Text textStyle="h3">Table - thin - SaaS UI DataTable component</Text>
                <DataTable
                    size='sm'
                    columns={columns}
                    data={data}>


                </DataTable>
            </Box>

            <MyTanTable data={tanTableData}/>
            <ExpenseTable data={tanTableData}/>

            <MyExcel/>
        </VStack>
    )
}
