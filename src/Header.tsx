import * as React from "react"
import { AppBar, Box, Link, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material"
import logo from "../src/assets/rkmslogo2.png"
import Carousal from "./Carousal"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { DrawerComp } from "./DrawerComp";

interface stateProp {
    value?:number
}

export const Header:React.FC = () => {

    const [value, setValue] = React.useState<stateProp>({value:0})
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))

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
                    {
                        isMatch ? (
                            <>
                                <Typography
                                    fontFamily={"revert"}
                                    color={"#121858"}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    sx={{paddingLeft:"5%", fontSize:"2rem"}}
                                >
                                    R K Memorial Hr. Sec. School
                                    <Typography variant="caption" alignItems={"center"} justifyContent={"center"} display="block" color={"#121858"}>
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
                                <Typography variant="h6" fontWeight={60} color={"orangered"} >7728988448</Typography>
                                <Tabs sx={{ marginLeft: "auto" }} indicatorColor="secondary" value={value} onChange={(e: React.SyntheticEvent, value:stateProp) => { setValue(value) }}>
                                    <Tab component="text" label="About Us" />
                                    <Tab component="text" label="Admission" />
                                    <Tab component="text" label="Gallery" />
                                    <Tab component="text" label="Pay Fees" />
                                </Tabs>
                            </>
                        )
                    }
                </Toolbar>
            </AppBar>
            <Carousal />
        </React.Fragment>
    )
}

