import React from 'react'
import Carousel from 'react-material-ui-carousel'
import CarosItem from './CaroselTem'
import { Box } from '@mui/material'
const Carousal: React.FC = () => {
    return (
        <React.Fragment>
        <Box marginTop={-2} sx = {{width:"100vw", maxWidth:"100%"}}>
            <Carousel>
                {Items.map((item) => <CarosItem key={item.id} item={item} />)}
            </Carousel>
        </Box>
        </React.Fragment>
    )
}

export default Carousal

const Items = [{
    "id": 1,
    "description": "Click to know more",
    "imageurl": "https://r4.wallpaperflare.com/wallpaper/361/724/903/kurzgesagt-wallpaper-4fe572bc1e062c1b055c3802f16184e4.jpg"
},
{
    "id": 2,
    "description": "Click",
    "imageurl": "https://r4.wallpaperflare.com/wallpaper/291/819/697/illustration-city-anime-painting-wallpaper-13f4d2d68139f5ef0b47c1ea2a545254.jpg"
},
{
    "id": 3,
    "description": "Click to know ",
    "imageurl": "https://c0.wallpaperflare.com/path/389/615/630/business-businessman-communication-concept-018abae74a916fe5c25568f413e2f536.jpg"
},
{
    "id": 4,
    "description": "know more",
    "imageurl": "https://c0.wallpaperflare.com/path/920/519/697/abstract-php-c-analytics-396cccf7b174786f7fb5183c080fcdb2.jpg"
},
{
    "id": 5,
    "description": "Click to know more",
    "imageurl": "https://c0.wallpaperflare.com/path/746/150/495/computer-concept-education-illustration-9a495324c912388b17b73a526a3b29b2.jpg"
},
{
    "id": 6,
    "description": "Click to more",
    "imageurl": "https://c0.wallpaperflare.com/path/49/108/986/business-background-illustration-people-d6f40e362bc6f1f9efa6ed3990dac5fd.jpg"
}
]