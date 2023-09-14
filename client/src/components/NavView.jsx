import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import logo from '../assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate, } from 'react-router-dom';
import { Button } from '@mui/material';
import LoginView from './LoginView';

function NavView() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false)
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const loginView = () => {
        navigate('/login');
    }



    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'black', }}>
            <Container maxWidth="100%">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* <Link to='/home'> */}
                    <Box sx={{ /* backgroundColor: 'blue', */ height: '42px', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'contents' },
                                flexGrow: 1,
                                fontFamily: 'Gideon Roman, cursive',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'white',
                                textDecoration: 'none',
                                textTransform: 'uppercase',
                                marginLeft: '5px',

                            }}
                        >
                            Black Rose Flora
                        </Typography>
                    </Box>



                    <Box sx={{ flexGrow: 0,/*  backgroundColor: 'red'  */ }}>
                        <Tooltip title="Cart">
                            <IconButton /* onClick={handleOpenUserMenu}  */ sx={{ p: 0 }}>
                                <ShoppingCartIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </Tooltip>
                        <Button sx={{ color: 'white', marginLeft: '10px' }} onClick={loginView}>Login</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default NavView;
