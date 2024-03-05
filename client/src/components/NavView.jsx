import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate, } from 'react-router-dom';
import { Button } from '@mui/material';


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
        <AppBar position="fixed" sx={{ backgroundColor: 'white', }}>
            <Container maxWidth="100%" sx={{ /* backgroundColor: 'green', */ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Toolbar disableGutters sx={{ /* backgroundColor: 'red', */ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <Box sx={{ /* backgroundColor: 'blue', */ height: '42px', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', width: '100%' }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'contents' },
                                flexGrow: 1,
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'black',
                                textDecoration: 'none',
                                textTransform: 'uppercase',
                                marginLeft: '5px',
                                fontFamily: 'Russo One, sans-serif',
                                fontSize: '25px'
                            }}>
                            Hot Food
                        </Typography>
                    </Box>
                </Toolbar>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Tooltip title="Cart">
                        <IconButton /* onClick={handleOpenUserMenu}  */ sx={{ p: 0 }}>
                            <ShoppingCartIcon sx={{ color: 'black' }} />
                        </IconButton>
                    </Tooltip>
                    <Button sx={{ color: 'black', marginLeft: '10px' }} onClick={loginView}>Login</Button>
                </Box>
            </Container>
        </AppBar >
    );
}
export default NavView;
