import Carousel from 'react-material-ui-carousel'
import CarosItem from './CaroselTem'
import { Box} from '@mui/material'
import React from 'react'
import firstimg from '../assets/oppertunity.jpeg'
import secondimg from '../assets/secondImage.jpeg'
import thirdimg from '../assets/thirdImage.jpeg'
import fourthimage from '../assets/fourthImage.jpeg'
import fifthimage from '../assets/aboutUspage.jpeg'
import sixthimage from '../assets/sixthimage.jpeg'

const Carousal: React.FC = () => {
    return (
        <React.Fragment>
        <Box sx = {{ width:"100vw", height:"100%", maxWidth:"100%", marginTop:8}}>
            <Carousel duration={450} indicators={false}>
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
    "imageurl":`${secondimg}`
},
{
    "id": 2,
    "description": "Click",
    "imageurl":`${firstimg}`
},
{
    "id": 3,
    "description": "Click to know ",
    "imageurl":`${sixthimage}`
},
{
    "id": 4,
    "description": "know more",
    "imageurl":`${fifthimage}`
},
{
    "id": 5,
    "description": "Click to know more",
    "imageurl":`${fourthimage}`
},
{
    "id": 6,
    "description": "Click to more",
    "imageurl":`${thirdimg}`
}
]