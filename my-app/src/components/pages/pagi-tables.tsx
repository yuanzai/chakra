import {Box, HStack, Select, Table, Tbody, Td, Text, Tfoot, Th, Thead, Tr} from "@chakra-ui/react";
// import * as React from "react";
import React, {ChangeEvent, useEffect, useMemo, useState} from "react";
import {
    Pagination,
    PaginationContainer,
    PaginationNext,
    PaginationPage,
    PaginationPageGroup,
    PaginationPrevious,
    PaginationSeparator,
    usePagination,
} from "@ajna/pagination";
import {createColumnHelper, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";

// https://karthikraja555.medium.com/server-side-pagination-in-react-table-a4311b730d19
// https://www.npmjs.com/package/@ajna/pagination#usepagination
const fetchPokemons = async (
    pageSize: number,
    offset: number
): Promise<any> => {
    return await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offset}`
    ).then(async (res) => await res.json());
};

export type Pokemon = {
    name: string
    url: string
}

const columnHelper = createColumnHelper<Pokemon>()
const columns = [
    columnHelper.accessor('name', {
        cell: info => info.getValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('url', {
        cell: info => info.getValue(),
        footer: info => info.column.id,
    }),
];

// const data:Pokemon[] = [
//     {
//         name: "poke1"
//     },
//     {
//         name: "poke2"
//     }
// ];
export default function PagiTables() {


    // states
    const [pokemonsTotal, setPokemonsTotal] = useState<number | undefined>(
        undefined
    );
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const columnData = useMemo(() => columns, [columns]);
    // const rowData = useMemo(() => data, [data]);
    const table = useReactTable({
        columns: columnData,
        data: pokemons,
        getCoreRowModel: getCoreRowModel(),
    });


    // constants
    const outerLimit = 1;
    const innerLimit = 2;

    // pagination hook
    const {
        pages,
        pagesCount,
        offset,
        currentPage,
        setCurrentPage,
        setIsDisabled,
        isDisabled,
        pageSize,
        setPageSize,
    } = usePagination({
        total: pokemonsTotal,
        limits: {
            outer: outerLimit,
            inner: innerLimit,
        },
        initialState: {
            pageSize: 10,
            isDisabled: false,
            currentPage: 1,
        },
    });

    // effects
    useEffect(() => {
        fetchPokemons(pageSize, offset)
            .then((pokemons) => {
                setPokemonsTotal(pokemons.count);
                setPokemons(pokemons.results);
            })
            .catch((error) => console.error("App =>", error));
    }, [currentPage, pageSize, offset]);

    // handlers
    const handlePageChange = (nextPage: number): void => {
        // -> request new data using the page number
        setCurrentPage(nextPage);
        console.log("request new data with ->", nextPage);
    };

    const handlePageSizeChange = (
        event: ChangeEvent<HTMLSelectElement>
    ): void => {
        const pageSize = Number(event.target.value);

        setPageSize(pageSize);
    };

    return (
        <Box borderWidth='1px' borderRadius='lg' p="5">
            <Table size={"sm"}>
                <Thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map((column) => (
                                <Th key={column.id}>{flexRender(column.column.columnDef.header, column.getContext())}</Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>
                <Tbody>
                    {table.getRowModel().rows.map((row, i) => {
                        return (
                            <Tr key={row.id}>
                                {row.getVisibleCells().map((cell) => {
                                    return <Td
                                        key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>;
                                })}
                            </Tr>
                        );
                    })}
                </Tbody>
                <Tfoot>
                    <Pagination
                        pagesCount={pagesCount}
                        currentPage={currentPage}
                        isDisabled={isDisabled}
                        onPageChange={handlePageChange}
                    >
                        <PaginationContainer
                            p={2}
                        >
                            <HStack spacing={2}>

                                <PaginationPrevious
                                    onClick={() => console.warn("I'm clicking the previous")}
                                >
                                    <Text>Previous</Text>
                                </PaginationPrevious>
                                <PaginationNext as={Text}
                                    // _hover={{
                                    //     bg: "yellow.400",
                                    // }}
                                    // bg="yellow.300"
                                                size={"sm"}
                                                onClick={() => console.warn("I'm clicking the next")}
                                >
                                    <Text>Next</Text>
                                </PaginationNext>
                                <Select ml={3} onChange={handlePageSizeChange} w={20}>
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                </Select>
                                <PaginationPageGroup
                                    isInline
                                    align="center"
                                    separator={
                                        <PaginationSeparator
                                            isDisabled
                                            onClick={() => console.warn("I'm clicking the separator")}
                                            // bg="blue.300"
                                            fontSize="sm"
                                            w={7}
                                            jumpSize={11}
                                        />
                                    }
                                >
                                    {pages.map((page: number) => (
                                        <PaginationPage
                                            w={7}
                                            // bg="red.300"
                                            key={`pagination_page_${page}`}
                                            page={page}
                                            onClick={() => console.warn("Im clicking the page")}
                                            fontSize="sm"
                                            // _hover={{
                                            //     bg: "green.300",
                                            // }}
                                            _current={{
                                                bg: "gray.300",
                                                fontSize: "sm",
                                                w: 7,
                                            }}
                                        />
                                    ))}
                                </PaginationPageGroup>
                            </HStack>

                        </PaginationContainer>
                    </Pagination>
                </Tfoot>
            </Table>
        </Box>
    );
};
