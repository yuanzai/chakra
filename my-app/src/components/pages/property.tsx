import {Text, VStack} from "@chakra-ui/react";
import React from "react";


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
