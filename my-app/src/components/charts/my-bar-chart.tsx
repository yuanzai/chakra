import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from 'recharts';
import {Box, useTheme} from "@chakra-ui/react";
import React from "react";


// https://codesandbox.io/s/chakra-react-select-ssxwy
const MyBarChart: React.FC<{ data: any[] }> = ({data}) => {
    const theme = useTheme();
    console.log(theme.colors.red[350])
    return (
        <Box>
            <BarChart width={600} height={240} data={data}>
                <Bar dataKey="uv" barSize={20} fill={theme.colors.blue[300]}/>
                <Bar dataKey="pv" barSize={20} fill={theme.colors.red[300]}/>
                <CartesianGrid stroke={theme.colors.gray[150]}/>
                <XAxis dataKey="name" tick={{fontSize: theme.fontSizes["xs"]}}/>
                <YAxis tick={{fontSize: theme.fontSizes["xs"]}}/>
                <Tooltip/>
                <Legend/>
            </BarChart>
        </Box>
    )
}
export default MyBarChart;
