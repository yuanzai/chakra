import * as React from "react";
import {Column, HeaderCell, NumberCell, ReactGrid, Row, TextCell} from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import {data2, IncomeCalculatedColumn, incomeRow, NumericType, rowHeaders} from "./expense-table";
import {Box} from "@chakra-ui/react";

// import "./styles.css";

interface Person {
    name: string;
    surname: string;
}

const getPeople = (): Person[] => [
    { name: "Thomas", surname: "Goldman" },
    { name: "Susie", surname: "Quattro" },
    { name: "", surname: "" }
];

const getColumns = (): Column[] => [
    { columnId: "name", width: 150 },
    { columnId: "surname", width: 150 }
];

const headerRow: Row = {
    rowId: "header",
    cells: [
        { type: "header", text: "Name" },
        { type: "header", text: "Surname" }
    ]
};

const getRows = (people: Person[]): Row[] => [
    headerRow,
    ...people.map<Row>((person, idx) => ({
        rowId: idx,
        cells: [
            { type: "text", text: person.name },
            { type: "text", text: person.surname }
        ]
    }))
];

const getExcelColumns = function (cols:IncomeCalculatedColumn[]): Column[] {
    return [
        { columnId: "Description", width: 300 },
        ...cols.map((col) => {return { columnId: col.columnType, width: 150 }})
    ]
}

const getExcelRows = function (colHeader: incomeRow[], cols:IncomeCalculatedColumn[]): Row[] {
    const headerRow: Row = {

        rowId: "header",
        cells: [
            { type: "header", text: "Description" },
        ...cols.map((col):HeaderCell => {return { type: "header", text: col.columnType }})
        ]
    }

    return [
        headerRow,
        ...colHeader.map((col, idx): Row => {
            const h = colHeader[idx]
                return {
                    rowId: idx,
                    cells: [
                        {type: "header", text: h.field ?? ""},
                        ...cols.map((col): TextCell | NumberCell => {
                            switch (h.rowType) {
                                case NumericType.space:
                                    return {type: "text", text: ""}
                                default:
                                    return {type: "number", value: h.valueFromCol ? Number(h.valueFromCol(col)) : 0}
                            }


                        })
                    ]
                }
            }
        )
    ]
}


const MyExcel: React.FC = () => {
    // const [people] = React.useState<Person[]>(getPeople());

    const rows = getExcelRows(rowHeaders, data2);
    const columns = getExcelColumns(data2);

    return (
        <Box borderWidth='1px' borderRadius='lg' p="5">
        <ReactGrid enableRangeSelection enableColumnSelection enableRowSelection rows={rows} columns={columns} />
        </Box>
    );
}

export default MyExcel;
