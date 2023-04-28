import * as React from "react"
import { AppBar, Toolbar, Typography } from "@mui/material"
import { DrawerComp } from "./DrawerComp"
export const Header = () => {
    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <Typography>Navbar</Typography>
                </Toolbar>
            <DrawerComp/>
            </AppBar>
        </React.Fragment>
    )
}

