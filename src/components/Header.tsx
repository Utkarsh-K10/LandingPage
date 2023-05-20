import * as React from "react"
import { AppBar, Box, Button, Link, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material"
import logo from "../assets/rkmslogo2.png"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { DrawerComp } from "./DrawerComp";
// import {styled} from '@mui/material/styles'

interface stateProp {
    value?: number
}

export const Header: React.FC = () => {

    const [value, setValue] = React.useState<stateProp>({ value: 0 })
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <React.Fragment>
            <AppBar sx={{ background: "#f5f5f5" }}>
                <Toolbar>
                    <Link href="/">
                        <Box
                            component={"img"}
                            sx={{ height: 85, justifyContent: "center" }}
                            alt="logo"
                            src={logo}
                            alignItems={"center"}
                        />
                    </Link>
                    {
                        isMatch ? (
                            <>
                                <Typography
                                    sx={{ fontSize: "2rem", justifyContent: "center", alignItems: "center", margin: "auto" }}
                                >
                                    <Typography variant="caption" color={"orangered"} gutterBottom sx={{ display: { sm: "block", md: "none", xs: "block" } }}>Admission Enquiry: 7728988448</Typography>
                                    <Typography
                                        sx={{ display: { sm: "block", md: "none", xs: "none" } }}
                                        fontFamily={"revert"}
                                        color={"#121858"}
                                        variant="h5"
                                        alignItems={"center"}
                                    > R K Memorial Hr. Sec. School</Typography>
                                    <Typography variant="caption" alignItems={"center"} justifyContent={"center"} display="block" color={"#121858"} sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
                                        DISE Code: 312241   Reg. No:1875
                                    </Typography>
                                </Typography>
                                <DrawerComp />
                            </>
                        ) : (
                            <>
                                <MailOutlineIcon color="warning" sx={{ marginLeft: "auto" }} />
                                <Typography variant="h6" fontWeight={70} color={"orangered"}> rkmemorialhss@gmail.com</Typography>
                                <PhoneInTalkIcon color="warning" sx={{ marginLeft: "auto" }} />
                                <Typography variant="body1" fontWeight={60} color={"orangered"}>7728988448</Typography>
                                <Tabs sx={{ marginLeft: "auto" }} indicatorColor="secondary" value={value} onChange={(e: React.SyntheticEvent, value: stateProp) => { setValue(value) }} >
                                    <Tab component="text" label="About Us" />
                                    <Link component={Button} href="/admission" underline="hover">
                                        <Tab component="text" label="Admission" />
                                    </Link>
                                    <Tab component="text" label="Gallery" />
                                    <Link component={Button} href="/user/login" underline="hover">
                                        <Tab component="text" label="Pay Fee" />
                                    </Link>
                                </Tabs>
                            </>
                        )
                    }
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

