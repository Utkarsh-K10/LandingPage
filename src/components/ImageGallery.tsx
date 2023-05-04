import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import aboutus from '../assets/aboutUspage.jpeg'
import firstimg from '../assets/fourthImage.jpeg'


// function
const ImageGallery: React.FC = () => {
    return (
        <React.Fragment>
            <Container>
                <Typography>
                    Image Gallery
                </Typography>

                <Grid container direction={{ xs: "row", md: "column", lg: "column", xl: "column" }} margin={5} marginLeft={0} >
                    <Divider>Center</Divider>
                    <Box sx={{ display: 'flex', flexDirection:"row", marginY:2}}>
                        <Box width={'50%'}>
                            <img src={aboutus} alt='new' width={"100%"} height={"100%"} />
                        </Box>
                        <Box width={'50%'} bgcolor={"GrayText"}  >
                            <Typography  textAlign="justify" variant='body1' fontWeight={60} mt={2 } ml={2} mr={2}> 
                                Part -1 Some Text Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, minima aperiam tenetur at
                                labore pariatur perferendis non animi ex omnis quaerat ipsam eaque velit aliquid, consectetur aut! Autem, doloremque nesciunt?
                            </Typography>
                        </Box>
                    </Box>

                    <Divider>Potential</Divider>
                    <Box sx={{ display: 'flex', flexDirection:"row",  marginY:2, marginLeft: { md: "auto", lg: 'auto', xl: 'auto' }}}>
                        <Box width={'50%'} bgcolor={"GrayText"} >
                            <Typography  textAlign="justify" variant='subtitle1' fontWeight={70} mt={2 } ml={2} mr={2}> 
                                Part -1 Some Text Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, minima aperiam tenetur at
                                labore pariatur perferendis non animi ex omnis quaerat ipsam eaque velit aliquid, consectetur aut! Autem, doloremque nesciunt?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Neque veritatis cupiditate suscipit, quasi rerum incidunt sint illum autem quisquam eum beatae? Fugit reprehenderit sunt minus sit pariatur iusto harum repellendus.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quia iure. 
                                Soluta, delectus harum beatae ipsam debitis eligendi excepturi dignissimos, animi ad, repudiandae voluptatum. Odit nostrum soluta aliquid rerum facere!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure doloribus ducimus nesciunt cum laborum vero, repellendus odit veniam labore.
                            </Typography>
                        </Box>
                        <Box width={'50%'}>
                            <img src={firstimg} alt='new' width={"100%"} height={"100%"} />
                        </Box>
                    </Box>
                    <Divider>Facilities</Divider>

                    <Box justifyContent={"center"} sx={{ height: '300px', width: { xs: 400, sm: 400, md: 500, lg: 600, xl: 700 }, bgcolor: 'primary.main', margin: "auto", marginTop: 2 }}>

                    </Box>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default ImageGallery

