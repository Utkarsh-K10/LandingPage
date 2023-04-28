import * as React from "react"
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material"
import { DrawerComp } from "./DrawerComp"
export const Header = () => {
    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <Typography>Navbar</Typography>
                    <Tabs>
                        <Tab label="About US"/>
                        <Tab label="Admission"/>
                    </Tabs>
                </Toolbar>
            <DrawerComp/>
            </AppBar>
        </React.Fragment>
    )
}

