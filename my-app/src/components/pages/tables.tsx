import {Text, VStack} from "@chakra-ui/react";
// import * as React from "react";
import React from "react";
import ExpenseTable from "../charts/expense-table";
import MyExcel from "../charts/excel";
import ListTable from "../charts/list-table";
import {faker} from "@faker-js/faker";
import SubrowTable from "../charts/subrow-table";
import {useQuery} from "@apollo/client";
import {getHousesQuery} from "./gql";

const fdata = new Array(10).fill({}).map(() => ({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    a1: faker.address.streetAddress(),
    a2: faker.address.secondaryAddress(),
    a3: faker.address.city(),
    a4: faker.address.state(),
    a5: faker.address.zipCode(),
    d1: faker.finance.amount(1000, 2000,0),
    d2: faker.finance.amount(100000, 800000,0),
    d3: faker.finance.amount(400000, 800000,0),
    d4: faker.finance.amount(10000, 50000,0),
}));
export default function Tables() {
    // const {data, loading, error}: QueryResult<TodosQuery, TodosQueryVariables> = useTodosQuery()
    const {data, loading, error} = useQuery(getHousesQuery)

    if (loading) return <Text textStyle="h3">Loading Data</Text>

    console.log(data)

    if (error) return (<div>Error! ${error.message}</div>)
    return (
        <VStack align={"left"}>
            <Text textStyle="h3">Pivot like and Excel like Tables</Text>
            <ExpenseTable/>
            <MyExcel/>
            <ListTable data={fdata}/>
            <SubrowTable/>
        </VStack>
    )
}
