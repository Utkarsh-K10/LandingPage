import { Header } from '../Header'
import React from 'react'
import CardSlide from '../CardSlide'
import { Divider } from '@mui/material'
const HomePage:React.FC = () => {
    return (
        <React.Fragment>
            <Header/>
            <Divider variant='fullWidth'/>
            <CardSlide/>
        </React.Fragment>
    )
}

export default HomePage