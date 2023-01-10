import {Link, Text, VStack} from "@chakra-ui/react";
// import * as React from "react";
import React from "react";
import ListTable from "../charts/list-table";
import {gql, useQuery} from "@apollo/client";
import GenericTable, {SubrowData} from "../charts/generic-table";
import {createColumnHelper} from "@tanstack/react-table";
import {House} from "../../gql/graphql";
import {NumericFormat} from "react-number-format";

// for grapql codegen https://www.the-guild.dev/graphql/codegen
export const getHousesQuery = gql`
    query GetHouses {
        houses {
            id
            address
            state
        }
    }
`

const columnHelper = createColumnHelper<House>()

const columns = [
    columnHelper.accessor('id', {
        cell: info => info.renderValue(),
        header: () => "ID",
        meta: {isNumeric: true},
    }),
    columnHelper.accessor('address', {
        header: () => 'Address',
        cell: info =>info.renderValue(),
    }),
    columnHelper.accessor('state', {
        header: () => 'State',
        cell: info =>info.renderValue(),
    }),
    ];

export default function GQLTables() {
    const {data, loading, error} = useQuery(getHousesQuery)

    if (loading) return <Text textStyle="h3">Loading Data</Text>

    console.log(data)


    if (error) return (<div>Error! ${error.message}</div>)
    return (
        <VStack align={"left"}>
            <Text textStyle="h3">GQL</Text>
            <GenericTable data={data.houses} columns={columns}/>
        </VStack>
    )
}
