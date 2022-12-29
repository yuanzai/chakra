import {Text, VStack} from "@chakra-ui/react";
// import * as React from "react";
import React from "react";
import ExpenseTable from "../charts/expense-table";
import MyExcel from "../charts/excel";

export default function Tables() {
    return (
        <VStack align={"left"}>
            <Text textStyle="h3">Pivot like and Excel like Tables</Text>
            <ExpenseTable/>
            <MyExcel/>
        </VStack>
    )
}
