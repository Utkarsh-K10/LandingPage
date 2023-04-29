import * as React from "react"
import { AppBar, Box, Link, Tab, Tabs, Toolbar, Typography } from "@mui/material"
import logo from "../src/assets/rkmslogo2.png"
import Carousal from "./Carousal"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
export const Header = () => {
    return (
        <React.Fragment>
            <AppBar sx={{ background: "#f1f8e9" }}>
                <Toolbar>
                    <Link href="/">
                        <Box
                            component={"img"}
                            sx={{ height: 100 }}
                            alt="logo"
                            src={logo}
                            alignItems={"center"}
                        />
                    </Link>
                    <Typography
                        marginLeft="5px"
                        variant="h5"
                        fontFamily={"revert"}
                        color={"#121858"}
                        alignItems={"center"}
                    >
                        R K Memorial Hr. Sec. School
                        <Typography variant="caption" display="block">
                            DISE Code: 312241   Reg. No:1875
                        </Typography>
                    </Typography>
                    <MailOutlineIcon color="warning" sx={{ marginLeft: "auto" }} />
                    <Typography variant="h6" fontWeight={70} color={"orangered"}> rkmemorialhss@gmail.com</Typography>
                    <PhoneInTalkIcon color="warning" sx={{ marginLeft: "auto" }} />
                    <Typography variant="h6" fontWeight={60} color={"orangered"} >7728988448</Typography>
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
            <Carousal />
        </React.Fragment>
    )
}

