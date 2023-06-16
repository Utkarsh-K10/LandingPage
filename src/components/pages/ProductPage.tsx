import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Divider, Paper, Table, TableBody, TableContainer, Link, TableHead, TableRow, TableCell, Container, Button, Box, Typography, Modal, TextField, Stack, Chip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HandymanIcon from '@mui/icons-material/Handyman';

const ProductPage: React.FC = () => {
    const [product, setProduct] = useState<[] | undefined>()
    const [open, setOpen] = useState(false)
    const handleEdit = () => setOpen(true)
    const closeHandler = () => setOpen(false)

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

    // const id = product?.filter((item)=>{item['_id']})
    // console.log(id)
    const handleDelete = async (id: String) => {
        try {
            let res = await axios.delete(`http://localhost:8080/products/${id}`)
            res = await res.data
            console.warn(res)
            getProduct()
            return (alert("Prodcut Deleted!!"))
        } catch (error) {
            console.log(error)
        }
    }
    console.log(product)


    return (
        <React.Fragment>
            <Container sx={{ marginTop: 10 }}>
                <Typography variant='h3' fontWeight={49}> All Products Table</Typography>
                <Box boxShadow={2} border={'ActiveBorder'}>
                    Add Another Product
                    <Button variant='outlined' size='small' sx={{ margin: 2 }}><Link component={Button} href="/products/addproduct" underline="none" startIcon={<AddCircleIcon />}>Add</Link></Button>
                </Box>
                <Divider />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 550 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell >Product Name</TableCell>
                                <TableCell align="center">Price $</TableCell>
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
                                                <TableCell align="center"><Button variant="outlined" size='small' startIcon={<EditIcon />} onClick={handleEdit}>Edit</Button></TableCell>
                                                <TableCell align="center" ><Button variant="outlined" startIcon={<DeleteIcon />} size='small' onClick={() => handleDelete(values['_id'])}> Delete</Button></TableCell>
                                            </TableRow>
                                        }
                                    </TableBody>
                                )
                            })
                        }
                    </Table>
                </TableContainer>
                {/* Model to edit product  */}
                <Modal open={open} onClose={closeHandler}>
                    <Paper elevation={4} sx={{ width: 430, paddingY: 2, position:"absolute", top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}}>
                        <Divider>
                            <Chip icon={<HandymanIcon />} label="Vendor" variant='outlined' color='primary' />
                        </Divider>
                        <Typography variant='h5' display={"block"} m={"auto"} padding={2}>
                            Edit Product
                        </Typography>
                        <Divider />
                        <form  noValidate>
                            <Stack spacing={2} width={400} margin={"auto"} marginTop={2}>
                                <TextField label="Mobile Name" variant='outlined' type='text' />
                                <TextField label="$ Price" variant='outlined' type='text' />
                                <Button type='submit' variant='contained'>Submit</Button>
                            </Stack>
                        </form>
                    </Paper>
                </Modal>
            </Container>
        </React.Fragment>
    )
}

export default ProductPage