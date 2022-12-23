import {Box, Text} from "@chakra-ui/react";
import * as React from "react";
import MyLineChart from "../charts/line-chart";
import MyBarChart from "../charts/my-bar-chart";

const data = [
    {name: 'Jan', uv: 400, pv: 100, amt: 400},
    {name: 'Feb', uv: 300, pv: 200, amt: 400},
    {name: 'Mar', uv: 200, pv: 400, amt: 400},
    {name: 'Apr', uv: 300, pv: 440, amt: 400},
    {name: 'May', uv: 400, pv: 430, amt: 400},
    {name: 'Jun', uv: 500, pv: 450, amt: 400},
    {name: 'Jul', uv: 600, pv: 460, amt: 400},
    {name: 'Aug', uv: 500, pv: 470, amt: 400},
    {name: 'Sep', uv: 400, pv: 460, amt: 400},
    {name: 'Oct', uv: 300, pv: 450, amt: 400},
    {name: 'Nov', uv: 200, pv: 410, amt: 400},
    {name: 'Dec', uv: 300, pv: 400, amt: 400},
];
export default function Charts() {
    // @ts-ignore
    return (
        <Box>
            <Text>Charts</Text>
            <MyLineChart data={data}/>
            <MyBarChart data={data}/>
        </Box>
    )
}
