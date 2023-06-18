import React, { useState } from 'react'
import { Divider, Paper, Button, Typography, Modal, TextField, Stack, Chip } from '@mui/material'
import HandymanIcon from '@mui/icons-material/Handyman';



// type ProdcutValue = {
//     id: any | null
//     product_name: string
//     price: number
// }

const FormModal: React.FC = () => {

    const [product, setProduct] = useState([])
    const [pid, setPid] = useState()
    const [pname, setPname] = useState()
    const [price, setPrice] = useState()
    
    const [open, setOpen] = useState(false)
    const closeHandler = ()=>{
        setOpen(false)
    }
    return (
        <React.Fragment>
            <Modal open={open} onClose={closeHandler}>
                <Paper elevation={4} sx={{ maxWidth: "md", width: 430, paddingY: 2, position: "absolute", top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <Divider>
                        <Chip icon={<HandymanIcon />} label="Vendor" variant='outlined' color='primary' />
                    </Divider>
                    <Typography variant='h5' display={"block"} m={"auto"} padding={2}>
                        Edit Product
                    </Typography>
                    <Divider />
                    <form noValidate>
                        <Stack spacing={2} width={400} margin={"auto"} marginTop={2}>
                            <TextField label="Mobile Name" variant='outlined' type='text' value={pname} />
                            <TextField label="$ Price" variant='outlined' type='text' value={price} />
                            <Button type='submit' variant='contained'>Submit</Button>
                        </Stack>
                    </form>
                </Paper>
            </Modal>
        </React.Fragment>
    )
}

export default FormModal