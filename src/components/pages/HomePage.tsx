import { Header } from '../Header'
import React from 'react'
import CardSlide from '../CardSlide'
import ImageGallery from '../ImageGallery'
import HeadingBox from '../HeadingBox'
import RHFLoginForm from './RHFLoginForm'
const HomePage:React.FC = () => {
    return (
        <React.Fragment>
            <HeadingBox/>
            <Header/>
            <CardSlide/>
            <ImageGallery/>
            <RHFLoginForm/>
        </React.Fragment>
    )
}

export default HomePage