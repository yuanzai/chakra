import {Text, VStack} from "@chakra-ui/react";
import {TableInstance} from '@saas-ui/react'
import React, {useRef} from "react";
import ExpenseTable from "../charts/expense-table";
import MyExcel from "../charts/excel";


export default function Property() {
    const url = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API}&q=Space+Needle,Seattle+WA`
    return (
        <VStack align={"left"}>
            <Text textStyle="h3">Property View</Text>
            <iframe
                width="600"
                height="450"
                // style="border:0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={url}>
            </iframe>

        </VStack>
    )
}
