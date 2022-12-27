import {AppShell} from "@saas-ui/react";
import {Box, Flex, Text} from "@chakra-ui/react";
import {Logo} from "../../Logo";
import {ColorModeSwitcher} from "../../ColorModeSwitcher";
import {NavItem, Sidebar, SidebarSection} from "@saas-ui/sidebar";
import * as React from "react";
import {Link, Outlet} from "react-router-dom";

export default function Home() {
    return (
        <AppShell
            colorScheme="primary"
            navbar={
                <Flex as="header" borderBottomWidth="1px" py="2" px="4">
                    <Box p="3">
                        <Logo width="30px"/>
                    </Box>
                    <Flex flexDirection="row" width="100%" alignItems="center">
                        <Text textStyle="h3" colorScheme="secondary">Residential Technologies Inc.</Text>
                    </Flex>
                    <Box justifySelf="flex-end">
                        <ColorModeSwitcher/>
                    </Box>
                </Flex>
            }
            sidebar={
                <Sidebar

                    breakpoints={{ base: true, sm: false }}
                    height="400px"
                    width="220px"
                    minWidth="220px"
                    maxWidth="320px">

                    <SidebarSection>
                        <NavItem isActive label="Home" href="/" />
                        <NavItem label="Charts" href="/charts"/>
                        <NavItem label="Forms" href="/forms"/>
                    </SidebarSection>
                </Sidebar>
            }
        >
            <Box as="main" flex="1" py="2" px="4">
                <Outlet/>
            </Box>
        </AppShell>
    )
}
