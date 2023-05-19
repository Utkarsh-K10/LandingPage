import { Box, Chip, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const card: React.CSSProperties = {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin:"auto"
}


const AdminPage: React.FC = () => {
    return (
        <React.Fragment>
            <Container component="section" sx={{ padding: 3 }}>
                <Grid container spacing={2} alignItems="stretch">
                    <Grid item xs={12} sm={4}>
                        <div style={card}>
                            <Paper elevation={4} sx={{ height: "100%", width: "100%" }} >
                                <EmojiEventsIcon
                                    fontSize="large"
                                    sx={{ padding: 2, color: "#ef5350" }}
                                />
                                <Typography variant="h5" component="h3" padding={2}>
                                    Explore Tokyo
                                </Typography>
                                <Typography padding={2}>
                                    Discover Tokyo like you never have before.
                                </Typography>
                            </Paper>
                        </div>
                    </Grid>
                    <Divider variant='middle'>
                        <Chip color='info' icon={<EmojiEventsIcon />} label="Value" />
                    </Divider>
                    <Grid item xs={12} sm={4}>
                        <div style={card}>
                            <Paper elevation={4} sx={{ height: "100%", width: "100%" }} >
                                <EmojiEventsIcon
                                    fontSize="large"
                                    sx={{ padding: 2, color: "#ef5350" }}
                                />
                                <Typography variant="h5" component="h3" padding={2}>
                                    Explore Tokyo
                                </Typography>
                                <Typography padding={2}>
                                    Discover Tokyo like you never have before.
                                </Typography>
                            </Paper>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default AdminPage