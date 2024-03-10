import React from 'react'
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

const defaultTheme = createTheme();

function AddProduct() {
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
                <div className="addProduct__title">
                    Add New Product
                    {/* <Link to="/products/addProduct" className="productAdd__link">
                        <AddIcon />
                        Add New
                    </Link> */}
                </div>
                <Container component="main" maxWidth="md" className='addProduct__form'>

                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
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
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
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
                                    <TextField fullWidth id="select"  value="10" select>
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
        </div>
    )
}

export default AddProduct