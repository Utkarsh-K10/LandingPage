import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Divider, Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Container, Button, Box, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const ProductPage: React.FC = () => {
    const [product, setProduct] = useState<[] | undefined>()

    const getProduct = async () => {
        await axios.get("http://localhost:8080/products")
            .then((response) => {
                setProduct(response.data)
            })
            .catch((error) => { return error })
    }

    useEffect(() => {
        getProduct()
    }, [])
console.log(product)
    return (
        <React.Fragment>
            <Container sx={{marginTop:10}}>
                <Typography variant='h3' fontWeight={49}> All Products Table</Typography>
                <Box>Add Another Product
                    <Button  size='small' >Add Product</Button>
                </Box>
                <Divider />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 550 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">Edit</TableCell>
                                <TableCell align="center">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        {
                            product?.map((values) => {
                                return (
                                    <TableBody>
                                        {
                                            <TableRow
                                                key={values['_id']}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {values['product_name']}
                                                </TableCell>
                                                <TableCell align="center">{values['price']}</TableCell>
                                                <TableCell align="center"><Button variant="outlined" size='small' startIcon = {<EditIcon/>} >Edit</Button></TableCell>
                                                <TableCell align="center" ><Button variant="outlined" startIcon= {<DeleteIcon/>} size='small'> Delete</Button></TableCell>
                                            </TableRow>
                                        }
                                    </TableBody>
                                )
                            })
                        }
                    </Table>
                </TableContainer>
            </Container>
        </React.Fragment>
    )
}

export default ProductPage