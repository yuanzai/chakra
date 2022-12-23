import * as React from "react"
import {
    ChakraProvider,
    Box,
    Button,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    extendTheme,
    SimpleGrid,
    Card,
    CardBody,
    Center,
    Flex,
} from "@chakra-ui/react"
import {SaasProvider} from '@saas-ui/react'
import {AppShell} from '@saas-ui/app-shell'
import {Sidebar, SidebarSection, NavItem} from '@saas-ui/sidebar'
import {theme as baseTheme} from '@saas-ui/react'

import {ColorModeSwitcher} from "./ColorModeSwitcher"
import {Logo} from "./Logo"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./Components/Pages/home";
import Charts from "./Components/Pages/charts";
import Forms from "./Components/Pages/forms";
import Reports from "./Components/Pages/reports";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}>
                    <Route index element={<Reports />} />
                    <Route path='/charts' element={<Charts/>}/>
                    <Route path='/forms' element={<Forms/>}/>
                </Route>
            </Routes>
        </Router>
    )
}
