import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Divider, Paper, Typography } from '@mui/material'

const ProductPage: React.FC = () => {
    const [product, setProduct] = useState < [] | undefined >()

    const getProduct = async() => {
        await axios.get("http://localhost:8080/products")
            .then((response) => {
                setProduct(response.data)
            })
            .catch((error)=>{return error})
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <React.Fragment>
            <Paper sx={{width:350, justifyContent:"center", mt:10}}>
                {
                    product?.map((values)=>{
                        return(
                            <div id={values['_id']}>
                            <Typography variant='h5'> Product Name</Typography>
                            <p>
                             {values['product_name']}
                            </p>
                            <Divider/>
                            <Typography variant='h6'>Product Price</Typography>
                            <p>
                                {values['price']}
                            </p>
                            </div>
                        )
                    })
                }
                <Divider/>
                <p>All products</p>
            </Paper>
        </React.Fragment>
    )
}

export default ProductPage