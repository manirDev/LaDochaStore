import React, { useState } from 'react'
import './AddProduct.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MenuItem } from '@mui/material';
import PageBanner from '../../../components/admin/pagebanner/PageBanner';
import StoreIcon from "@mui/icons-material/Store";

const defaultTheme = createTheme();
const fileTypes = ["JPG", "PNG", "GIF"];

function AddProduct() {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
      setFile(file);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return (
        <div className='addProduct'>
            <div className="addProduct__container">
                <PageBanner leftText={"Add New Product"} LeftIcon={""} rightText={"Products"} RightIcon={StoreIcon} slug={"/products"} />
                <div className="addProduct__fromContainer">
                    <div className="formContainer__left">
                        <div className="product__information">
                            <h2>Product Information</h2>
                            <Container maxWidth="md" className=''>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}>
                                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={12}>
                                                <TextField
                                                    autoComplete="given-name"
                                                    name="name"
                                                    required
                                                    fullWidth
                                                    id="name"
                                                    label="Name"
                                                    autoFocus
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="sku"
                                                    label="SKU"
                                                    name="sku"
                                                    autoComplete="sku"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="barcode"
                                                    label="Barcode"
                                                    name="barcode"
                                                    autoComplete="barcode"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    name="shortDescription"
                                                    label="Short Description"
                                                    type="shortDescription"
                                                    id="shortDescription"
                                                    autoComplete="shortDescription"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField fullWidth id="select" value="10" select>
                                                    <MenuItem value="10">Category</MenuItem>
                                                    <MenuItem value="20">Twenty</MenuItem>
                                                </TextField>
                                            </Grid>
                                        </Grid>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Add Product
                                        </Button>

                                    </Box>
                                </Box>
                            </Container>
                        </div>
                        <div className="addProduct__media">
                            <h2>Media</h2>
                            <Container maxWidth="md" className=''>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}>
                                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={12}>
                                            {/* <FileUploader handleChange={handleChange} name="file" types={fileTypes} /> */}
                                            
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Container>
                        </div>
                    </div>
                    <div className="formContainer__right">
                        <div className="addProduct__pricing">
                            <h2>Pricing</h2>
                            <Container component="main" maxWidth="md" className='addProduct__form'>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}>
                                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mb: 2 }}>
                                        <Grid container spacing={2}>

                                            <Grid item xs={12} sm={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="price"
                                                    label="Price"
                                                    name="price"
                                                    autoComplete="price"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="discountedPrice"
                                                    label="Discounted Price"
                                                    name="discountedPrice"
                                                    autoComplete="discountedPrice"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>

                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            name="SomeName"
                                                            defaultChecked
                                                        />
                                                    }
                                                    label="Charge tax on this product" />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Container>
                        </div>
                        <div className="addProduct__organize">
                            <h2>Organize</h2>
                            <Container component="main" maxWidth="md" >
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}>
                                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mb: 2 }}>
                                        <Grid container spacing={2}>

                                            <Grid item xs={12} sm={12}>
                                                <TextField fullWidth id="select" value="10" select>
                                                    <MenuItem value="10">Collection</MenuItem>
                                                    <MenuItem value="20">Women Clothing</MenuItem>
                                                    <MenuItem value="20">Men Clothing</MenuItem>
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField fullWidth id="select" value="10" select>
                                                    <MenuItem value="10">Select Category</MenuItem>
                                                    <MenuItem value="20">Twenty</MenuItem>
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={12}>

                                                <TextField fullWidth id="select" value="10" select>
                                                    <MenuItem value="10">Select Status</MenuItem>
                                                    <MenuItem value="20">Published</MenuItem>
                                                    <MenuItem value="20">Scheduled</MenuItem>
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="tags"
                                                    label="Tags"
                                                    name="tags"
                                                    autoComplete="tags"
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct