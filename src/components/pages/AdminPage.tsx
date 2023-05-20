import { Box, Chip, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const card: React.CSSProperties = {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
}


const AdminPage: React.FC = () => {
    return (
        <React.Fragment>
            <Box>
                <div style={card}>
                    <Paper elevation={4} sx={{ height: "100%", width: "100%" }} >
                        <EmojiEventsIcon
                            fontSize="large"
                            sx={{ padding: 2, color: "#ef5350" }}
                        />
                        <Link to={'/admin/login'} >
                            <Typography variant="h5" component="h3" padding={2}>
                                Login as Admin
                            </Typography>
                        </Link>
                        <Typography padding={2}>
                            Discover Tokyo like you never have before.
                        </Typography>
                    </Paper>
                </div>
            </Box>
            <Divider variant='middle' sx={{ margin: 2 }}>
                <Chip color='info' icon={<EmojiEventsIcon />} label="Admin" />
            </Divider>
            <Box>
                <div style={card}>
                    <Paper elevation={5} sx={{ height: "100%", width: "100%" }} >
                        <PersonIcon
                            fontSize="large"
                            sx={{ padding: 2, color: "#ef5350" }}
                        />
                        <Link to={'/admin/signup'} >
                            <Typography variant="h5" component="h3" padding={2}>
                                Register as Admin
                            </Typography>
                        </Link>
                        <Typography padding={2}>
                            Discover Tokyo like you never have before.
                        </Typography>
                    </Paper>
                </div>
            </Box>
        </React.Fragment >
    )
}

export default AdminPage