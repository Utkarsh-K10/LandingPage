import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Button, Chip, Container, Divider, IconButton, Link, Modal, Paper, Stack, Table, TableBody, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material';
import TableFooter from '@mui/material/TableFooter';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TablePagination from '@mui/material/TablePagination';
import { useTheme } from '@mui/material/styles';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
// import HandymanIcon from '@mui/icons-material/Handyman';
import AddProductPage from './AddProductPage';

// type ProdcutValue = {
//     id: any
//     product_name: string
//     price: number
// }

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



const ProductPage: React.FC = () => {

    const [product, setProduct] = useState([])
    const [rows, setRows] = useState([])
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows?.length) : 0;
    const [open, setOpen] = useState(false)
    const handleAddOpen = () => {
        setOpen(true)
    }
    const closeHandler = () => {
        setOpen(false)
    }


    // Get all product handler
    const getProduct = async () => {
        await axios.get("http://localhost:8080/products")
            .then((response) => {
                setProduct(response.data)
                setRows(response.data)
            })
            .catch((error) => { return error })
    }

    useEffect(() => {
        getProduct()
    }, [])

    const handleDelete = async (id: any) => {
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

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    return (
        <React.Fragment>
            {/* <Container sx={{ marginTop: 10 }}>
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
                                    <TableBody >
                                        {
                                            <TableRow
                                                key={values['id']}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {values['product_name']}
                                                </TableCell>
                                                <TableCell align="center">{values['price']}</TableCell>
                                                <TableCell align="center"><Button variant="outlined" size='small' startIcon={<EditIcon />} onClick={() => handleEdit()}>Edit</Button></TableCell>
                                                <TableCell align="center" ><Button variant="outlined" startIcon={<DeleteIcon />} size='small' onClick={() => handleDelete(values['id'])}> Delete</Button></TableCell>
                                            </TableRow>
                                        }
                                    </TableBody>
                                )
                            })
                        }
                    </Table>
                </TableContainer>
            </Container> */}
            <Container sx={{ marginTop: 10 }}>
                <Divider />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 550 }} aria-label="simple table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell colSpan={2}>
                                    <Typography variant="body1" fontSize={20} fontWeight={10}> Manage Products</Typography>
                                </StyledTableCell>
                                <StyledTableCell colSpan={2} align="right">
                                    <Button variant="outlined" size='small' onClick={handleAddOpen} startIcon={<AddCircleIcon />}>
                                        {/* <Link component={Button} href="/products/addproduct" underline="none" startIcon={<AddCircleIcon />}>
                                            Add
                                        </Link> */}
                                        Add
                                    </Button>
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell >Product Name</StyledTableCell>
                                <StyledTableCell align="center">Price $</StyledTableCell>
                                <StyledTableCell align="center">Edit</StyledTableCell>
                                <StyledTableCell align="center">Delete</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody >
                            {(rowsPerPage > 0
                                ? product.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : product)?.map((value) => {
                                    return (
                                        <TableRow
                                            key={value['_id']}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {value['product_name']}
                                            </TableCell>
                                            <TableCell align="center">
                                                {value['price']}
                                            </TableCell>
                                            <TableCell align="center">
                                                <Button variant="outlined" size='small' startIcon={<EditIcon />}>Edit</Button>
                                            </TableCell>
                                            <TableCell align="center" >
                                                <Button variant="outlined" startIcon={<DeleteIcon />} size='small' onClick={() => handleDelete(value['_id'])}>
                                                    Delete
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    )
                                }
                                )}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={3}
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: {
                                            'aria-label': 'rows per page',
                                        },
                                        native: true,
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
                <div>
                    <Modal open={open} onClose={closeHandler}>
                        <Paper variant="outlined" sx={{ maxWidth: "md", width: 410, paddingY: 2, position: "absolute", top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                            <Stack spacing={2} width={400} margin={"auto"} marginTop={2}>
                                <AddProductPage />
                                <Button onClick={closeHandler} variant="outlined" fullWidth size="small">Close</Button>
                            </Stack>
                        </Paper>
                    </Modal>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default ProductPage