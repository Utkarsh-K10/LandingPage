import { Header } from '../Header'
import React from 'react'
import CardSlide from '../CardSlide'
import ImageGallery from '../ImageGallery'
const HomePage:React.FC = () => {
    return (
        <React.Fragment>
            <Header/>
            <CardSlide/>
            <ImageGallery/>
        </React.Fragment>
    )
}

export default HomePage