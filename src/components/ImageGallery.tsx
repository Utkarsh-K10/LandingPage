import { Container, Divider, Grid } from '@mui/material'
import React from 'react'
import aboutus from '../assets/aboutUspage.jpeg'


// image css
const imagecard: React.CSSProperties = {
    border: "1px solid orangered",
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
}

// function
const ImageGallery: React.FC = () => {
    return (
        <>
        <React.Fragment>
            <Container component="section" maxWidth="lg" sx={{ padding: 1, px:4 }}>
                <Grid container alignItems="stretch">
                    <Grid item xs={6} sm={4} md={8}>
                        <div style={imagecard}>
                            <img src={aboutus} alt='about Us' />
                        </div>
                    </Grid>
                </Grid>
                <Divider orientation="vertical" flexItem sx={{color:'orangered'}} />
                <Grid container alignItems="stretch">
                    <Grid item xs={6} sm={4} md={8}>
                        <div style={imagecard}>
                            <img src={aboutus} alt='about Us' />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
        </>
    )
}

export default ImageGallery