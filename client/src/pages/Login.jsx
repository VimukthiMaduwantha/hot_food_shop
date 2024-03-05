import { Box, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import React from 'react'
import image1 from '../assets/loginImg.jpg'

function Login() {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container spacing={0}>
                <Grid sx={{ height: { md: '100vh', xs: '40vh' }, overflow: 'hidden' }} item md={6} xs={12} >
                    <img
                        src={image1}
                        width='100%'
                        height='auto'
                    />
                </Grid>
                <Grid sx={{ height: { md: '100vh', xs: '40vh' }, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} item md={6} xs={12} >
                    <Typography sx={{ fontFamily: 'Noto Sans, sans-serif', fontSize: { md: '35px', xs: '18px' }, fontWeight: 'bold' }}>Welcome back!!</Typography>
                    <Typography sx={{ fontFamily: 'Noto Sans, sans-serif', fontSize: { md: '13px', xs: '12px' }, fontWeight: 'bold' }}>Enter your credetials to access your account.</Typography>
                    <br />
                    <Box sx={{ width: '100%', width: { md: '35vw', xs: '80vw' } }}>
                        <TextField
                            label="User Name"
                            id="outlined-size-small"
                            size="small"
                            fullWidth
                            sx={{ marginBottom: '10px' }}
                        />
                        <TextField
                            label="Password"
                            id="outlined-size-small"
                            size="small"
                            fullWidth
                            sx={{ marginBottom: '10px' }}
                        />
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', }}>
                            <button className='loginBtn'>
                                <span className="LoginBox">
                                    Sign In
                                </span>
                            </button>
                        </Box>
                        <br />
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', }}>
                            <Typography sx={{ fontFamily: 'Noto Sans, sans-serif' }}>
                                Don't have an Account ?  <a href='' style={{ textDecoration: 'none', color: 'blue', fontFamily: 'Noto Sans, sans-serif', fontWeight: 'bold' }}>Sign Up</a>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>

    )
}

export default Login