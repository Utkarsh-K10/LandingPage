import { Button, Chip, Divider, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import axios from 'axios';

// yup form schema
type formschema = {
    product_name: string
    price: number
}

type productProp = {
    pid: any
}

// #1 get data from api and fill in the field
// #2 set data from the state from the axois data 
// #3 getting the id from the table of the product page

const EditProductPage: React.FC<productProp> = ({ pid }) => {

    const id = pid
    const [product, setProduct] = useState<formschema>({
        product_name: '',
        price: 0
    })

    useEffect(() => {
        axios.get(`http://localhost:8080/products/${id}`).
            then((res) => {
                setProduct(
                    {
                        product_name: res.data.product_name,
                        price: res.data.price
                    });
            }).
            catch((error) => console.log(error));
    }, [id]);


    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const pdata = {
            product_name: product.product_name,
            price: product.price
        }

        axios.put(`http://localhost:8080/products/${id}`, pdata)
            .then((res) => { 
                console.log(res.data)
             })
            .catch((error) => { console.log(error) })
    }

    // const onSubmit = async()=>{
    //     try {
    //         const resp = await axios.put(`http://localhost:8080/products/`, {product_name :data.product_name , price:data.price })   
    //         return(()=>resp.data)
    //     } catch (error) {
    //         return(()=>error)
    //     }
    // }

    return (
        <React.Fragment>
            <div>
                <Divider>
                    <Chip icon={<LocalMallIcon />} label="Vendor" variant='outlined' color='primary' />
                </Divider>
                <Typography variant='h5' display={"block"} m={"auto"} padding={2}>
                    Fill Details to Add Product
                </Typography>
                <Divider />
                <form onSubmit={onSubmit} noValidate>
                    <Stack spacing={2} width={400} margin={"auto"} marginTop={2}>
                        <TextField label="Mobile Name" variant='outlined' type='text' name="product_name" value={product.product_name} onChange={handleOnchange} />
                        <TextField label="$ Price" variant='outlined' type='text' name="price" value={product.price} onChange={handleOnchange} />
                        <Button type='submit' variant='contained'>Update</Button>
                    </Stack>
                </form>
            </div>
        </React.Fragment>
    )
}

export default EditProductPage