import { Header } from '../Header'
import React from 'react'
import CardSlide from '../CardSlide'
import ImageGallery from '../ImageGallery'
import HeadingBox from '../HeadingBox'
const HomePage:React.FC = () => {
    return (
        <React.Fragment>
            <HeadingBox/>
            <Header/>
            <CardSlide/>
            <ImageGallery/>
        </React.Fragment>
    )
}

export default HomePage