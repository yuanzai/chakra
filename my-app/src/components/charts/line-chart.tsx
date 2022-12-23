import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip, Legend
} from 'recharts';
import {Box, useTheme} from "@chakra-ui/react";
import React from "react";


// https://codesandbox.io/s/chakra-react-select-ssxwy
const MyLineChart: React.FC<{ data: any[] }> = ({data}) => {
    const theme = useTheme();
    return (
        <Box>
            <LineChart width={600} height={240} data={data}>
                <Line type="monotone" dataKey="uv" stroke={theme.colors.blue[500]}/>
                <Line type="monotone" dataKey="pv" stroke={theme.colors.red[500]}/>
                <CartesianGrid stroke={theme.colors.gray[150]}/>
                <XAxis dataKey="name" tick={{fontSize: theme.fontSizes["xs"]}}/>
                <YAxis tick={{fontSize: theme.fontSizes["xs"]}}/>
                <Tooltip/>
                <Legend/>
            </LineChart>
        </Box>
    )
}
export default MyLineChart;
