import React from 'react'
import CardSlide from '../CardSlide'
import ImageGallery from '../ImageGallery'
import HeadingBox from '../HeadingBox';
import Carousal from '../Carousal'

const HomePage:React.FC = () => {
    return (
        <React.Fragment>
            <HeadingBox/>
            <Carousal />
            <CardSlide/>
            <ImageGallery/>
        </React.Fragment>
    )
}

export default HomePage