import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';

const card:React.CSSProperties = {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black',
    borderRadius: '5px',
    textAlign: 'center',
}


const CardSlide: React.FC = () => {
    return (
        <React.Fragment>
            <Container component="section" maxWidth="lg" sx={{padding:12,px:4}}>
                <Grid container spacing={2} alignItems="stretch">
                    <Grid item xs={12} sm={4}>
                        <div style={card}>
                            <EmojiEventsIcon
                                fontSize="large"
                                sx={{padding:2, color:"orangered"}}
                            />
                            <Typography variant="h5" component="h3" padding={2}>
                                Explore Tokyo
                            </Typography>
                            <Typography padding={2}>
                                Discover Tokyo like you never have before.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div style={card}>
                            <WorkspacePremiumIcon
                                color="primary"
                                fontSize="large"
                                sx={{padding:2}}
                            />
                            <Typography variant="h5" component="h3" padding={2} >
                                Eat Delicious Food
                            </Typography>
                            <Typography  padding={2}>
                                Find the best local restaurants and bars.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div  style={card}>
                            <MenuBookIcon
                                color="primary"
                                fontSize="large"
                                sx={{padding:2}}
                            />
                            <Typography variant="h5" component="h3" padding={2}>
                                Visit the Best Spots
                            </Typography>
                            <Typography padding={2}>
                                Check out some of the less known locations and attractions for tourists.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div  style={card}>
                            <DirectionsBusFilledIcon
                                color="primary"
                                fontSize="large"
                                sx={{padding:2}}
                            />
                            <Typography variant="h5" component="h3" padding={2}>
                                Visit the Best Spots
                            </Typography>
                            <Typography padding={2}>
                                Check out some of the less known locations and attractions for tourists.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div  style={card}>
                            <SportsCricketIcon
                                color="primary"
                                fontSize="large"
                                sx={{padding:2}}
                            />
                            <Typography variant="h5" component="h3" padding={2}>
                                Visit the Best Spots
                            </Typography>
                            <Typography padding={2}>
                                Check out some of the less known locations and attractions for tourists.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div  style={card}>
                            <MedicalServicesIcon
                                color="primary"
                                fontSize="large"
                                sx={{padding:2}}
                            />
                            <Typography variant="h5" component="h3" padding={2}>
                                Visit the Best Spots
                            </Typography>
                            <Typography padding={2}>
                                Check out some of the less known locations and attractions for tourists.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default CardSlide




// <Box sx={{ minWidth: 230 }}>
//                     <Card variant="outlined" sx={{height:'135px'}}>  
//                         <CardContent>
//                             <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                                 Word of the Day
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 </Box>