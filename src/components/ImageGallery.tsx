import { Box, Chip, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import FaceIcon from '@mui/icons-material/Face';
import aboutus from '../assets/aboutuskids.jpg'
import firstimg from '../assets/potentielkids.jpg'
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';


// function
const ImageGallery: React.FC = () => {
    return (
        <React.Fragment>
            <Container>
                <Typography>
                    Image Gallery
                </Typography>
                <Grid container direction={{xs:"column", sm:"column",md:"row", lg:"column", xl:"column"}} margin={5} marginLeft={0} >
                    <Divider variant='middle'>
                        <Chip  color='info' icon={<SchoolIcon/>}label="Value"/>
                    </Divider>
                    <Box sx={{ display: 'flex', flexDirection: {md:"row",lg:"row",xl:"row"}, marginY: 2 }}>
                        <Box width={'50%'} height={"65vh"}>
                            <img src={aboutus} alt='new' width={"100%"} height={"100%"} />
                        </Box>
                        <Box width={'50%'} bgcolor={"InfoBackground"}>
                            <Paper elevation={3} sx={{ height: "100%", width: "100%" }}>
                                <Typography variant="subtitle1" color={"#ef5350"} gutterBottom display={"block"}  fontWeight={40} align='left' ml={2} paddingTop={2}> KNOW THE DEPTH </Typography>
                                <Typography variant="h3" component={"h3"} gutterBottom display={"block"} align='left' ml={2} fontFamily={"initial"} color={"primary.main"}> About Us </Typography>
                                <Divider variant='middle' sx={{width:"20%", maxWidth:"20%"}} textAlign='left'/>
                                <Typography textAlign="justify" variant='body1' fontWeight={60} mt={2} ml={2} mr={2}>
                                    Part -1 Some Text Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, minima aperiam tenetur at
                                    labore pariatur perferendis non animi ex omnis quaerat ipsam eaque velit aliquid, consectetur aut! Autem, doloremque nesciunt?
                                    sit amet consectetur adipisicing elit. Nostrum veritatis soluta, voluptatem molestias iure sapiente quas architecto.
                                </Typography>
                            </Paper>
                        </Box>
                    </Box>
                    <Divider>
                        <Chip  icon={<FaceRetouchingNaturalIcon/>}  label="Care" color='success'/>
                    </Divider>

                    <Box sx={{ display: 'flex', flexDirection: {md:"row",lg:"row",xl:"row"}, marginY: 2 }}>
                        <Box width={'50%'} bgcolor={"InfoBackground"} >
                            <Paper elevation={3} sx={{ height: "100%", width: "100%" }}>
                                <Typography variant="subtitle1" color={"#ef5350"} gutterBottom fontWeight={40} display={"block"} align='left' ml={2} paddingTop={2}>OUR WISDOM</Typography>
                                <Typography variant="h3" component={"h3"} gutterBottom display={"block"} align='left' ml={2} fontFamily={"initial"} color={"primary.main"}> Potential</Typography>
                                <Divider variant='middle' sx={{width:"20%", maxWidth:"20%"}} textAlign='left'/>
                                <Typography textAlign="justify" variant='body1' fontWeight={60} mt={2} ml={2} mr={2}>
                                Part -2 Some Text Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, minima aperiam tenetur at
                                    labore pariatur perferendis non animi ex omnis quaerat ipsam eaque velit aliquid, consectetur aut! Autem, doloremque nesciunt?
                                    sit amet consectetur adipisicing elit. Nostrum veritatis soluta, voluptatem molestias iure sapiente quas architecto.
                                </Typography>
                            </Paper>
                        </Box>
                        <Box width={'50%'} height={"65vh"}>
                            <img src={firstimg} alt='new' width={"100%"} height={"100%"} />
                        </Box>
                    </Box>
                    <Divider><Chip icon={<FaceIcon/>} label=" Cute Gallery" variant='outlined' color='warning'/></Divider>
                    <Box justifyContent={"center"} sx={{ height: '300px', width: { xs: 400, sm: 400, md: 500, lg: 600, xl: 700 }, bgcolor: 'primary.main', margin: "auto", marginTop: 2 }}>
                    </Box>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default ImageGallery

