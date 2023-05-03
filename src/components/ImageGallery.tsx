import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import aboutus from '../assets/aboutUspage.jpeg'


// function
const ImageGallery: React.FC = () => {
    return (
        <React.Fragment>
            <Container>
                <Typography>
                    Image Gallery
                </Typography>

                <Grid container direction={{ xs: "row", md: "column", lg: "column", xl: "column" }} margin={5} marginLeft={0}>

                    <Divider>Center</Divider>

                    <Box justifyContent={"center"} sx={{ height: '300px', width: { xs: 400, sm: 400, md: 500, lg: 600, xl: 700 }, bgcolor: 'primary.main', margin:"auto", alignItems:"center"}}>
                        <img src={aboutus} alt='new' width={"100%"} height={"100%"} />
                    </Box>

                    <Divider>Potential</Divider>

                    <Box justifyContent={"center"} sx={{ height: '300px', width: { xs: 400, sm: 400, md: 500, lg: 600, xl: 700 }, bgcolor: 'primary.main', margin:{xs:'auto'},marginTop:2, marginLeft:"auto" }} >

                    </Box>

                    <Divider>Facilities</Divider>

                    <Box justifyContent={"center"} sx={{ height: '300px', width: { xs:400, sm: 400, md: 500, lg: 600, xl: 700 }, bgcolor: 'primary.main',margin:"auto", marginTop:2}}>

                    </Box>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default ImageGallery

