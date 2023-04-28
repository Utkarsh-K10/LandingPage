import { Header } from '../Header'
import Carousal from '../Carousal'
import React from 'react'

const HomePage:React.FC = () => {
    return (
        <React.Fragment>
            <Header />
            <Carousal />
        </React.Fragment>
    )
}

export default HomePage