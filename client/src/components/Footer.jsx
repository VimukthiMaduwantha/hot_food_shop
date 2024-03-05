import { Box, Button, Divider, TextField, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{
                    fontFamily: 'Russo One, sans-serif',
                    fontSize: '25px'
                }}>
                    Hot Food
                </Typography>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
                <TextField type='email' id="outlined-basic" variant="outlined" placeholder='Enter Email' size='small' />
                <Button variant='contained' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textTransform: 'capitalize' }}>
                    Subscribe Now
                </Button>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
                <a className='footerStyle' href='/'>Home</a>
                <a className='footerStyle' href='/'>About</a>
                <a className='footerStyle' href='/'>Our Team</a>
                <a className='footerStyle' href='/'>Menu</a>
                <a className='footerStyle' href='/'>Online Order</a>
            </Box >
            <Divider />
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'cneter', marginTop: '5px' }}>
                <FacebookIcon />
                <InstagramIcon />
                <LinkedInIcon sx={{ fontSize: '25px' }} />
            </Box>
            <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'cenetr', fontSize: '10px' }}>
                ® 2023 Hot Food, Inc. All rights reserved.
            </Typography>
        </Box >
    )
}

export default Footer