import { Box, Card, CardContent, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
const CardSlide: React.FC = () => {
    return (
        <React.Fragment>
            <Stack direction={'row'} spacing={1} divider={<Divider orientation="vertical" flexItem />} alignItems={"center"} justifyContent={"center"} >
                <Box sx={{ minWidth: 230}}>
                    <Card variant="outlined" sx={{height:'135px'}}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box sx={{ minWidth: 240 }} >
                    <Card variant="outlined" sx={{height:'135px'}}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14, alignItems:"center" }} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box sx={{ minWidth: 230 }}>
                    <Card variant="outlined" sx={{height:'135px'}}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box sx={{ minWidth: 240 }}>
                    <Card variant="outlined" sx={{height:'135px'}}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box sx={{ minWidth: 230 }}>
                    <Card variant="outlined" sx={{height:'135px'}}>  
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Stack>
        </React.Fragment>
    )
}

export default CardSlide