import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const HeadingBox: React.FC = () => {
    return (
        <React.Fragment>
            <Box display={{xs:"none",sm:"flex"}} flexDirection={"row"} component={Container} bgcolor={"#3f51b5"} disableGutters mt={7}>
                <Box width={"100%"} height={"100%"} margin={"auto"}>
                    <Typography variant='h2' fontFamily={"initial"} display={"block"} color={"white"} textAlign={"center"}> --:-- R K MEMORIAL HR. SEC. SCHOOL --:--</Typography>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default HeadingBox