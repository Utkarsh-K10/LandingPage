import * as React from "react"
import { AppBar, Box, Link, Tab, Tabs, Toolbar, Typography } from "@mui/material"
import logo from "../src/assets/rkmslogo2.png"

export const Header = () => {
    return (
        <React.Fragment>
            <AppBar sx={{ background: "#f1f8e9" }}>
                <Toolbar>
                    <Link href="/">
                        <Box
                            component={"img"}
                            sx={{ height: 96 }}
                            alt="logo"
                            src={logo}
                            alignItems={"center"}
                        />
                    </Link>
                    <Typography
                        variant="h4"
                        fontFamily={"revert"}
                        fontWeight={10}
                        fontSize={45}
                        color={"#2c387e"}
                        alignItems={"center"}
                        margin={"auto"}
                    >
                        R K Memorial Hr. Sec. School
                    </Typography>
                    <>
                        <Tabs sx={{ marginLeft: "auto" }}>
                            <Tab label="About US" />
                            <Tab label="Admission" />
                            <Tab label="Gallery" />
                            <Tab label="Facilities" />
                        </Tabs>
                    </>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

