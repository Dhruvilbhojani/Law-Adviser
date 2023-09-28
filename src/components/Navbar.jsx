import React from "react";
import { Button, AppBar, Avatar, Box, Container, IconButton, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography, Link } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const menus = [{ menu: 'Find Lawyer', link: '/search-lawyer' },{ menu: 'Legal Advice', link: '#' },{ menu: 'Legal News', link: '#' },{ menu: 'Legal Aid Services', link: '#' }];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function Hello() {

    return (
        <>
            <AppBar position="static" style={{ backgroundColor: '#4A154B' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {/* {menus.map((menu) => (
                                    <MenuItem key={menu}>
                                        <Link>
                                            <Typography textAlign="center">{menu}</Typography>
                                        </Link>
                                    </MenuItem>
                                ))} */}
                            </Menu>
                        </Box>
                        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Stack direction={'row'} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <MenuItem>
                                    <Button
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                        href={'./search-lawyer'}
                                    >
                                        Find Lawyer
                                    </Button>
                                </MenuItem>
                                <MenuItem>
                                    <Button
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                        href={'./law-advice'}
                                    >
                                        Legal Advice
                                    </Button>
                                </MenuItem>
                                <MenuItem>
                                    <Button
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                        href={'./#'}
                                    >
                                        Legal News
                                    </Button>
                                </MenuItem>
                                <MenuItem>
                                    <Button
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                        href={'./#'}
                                    >
                                        Legal Aid Services
                                    </Button>
                                </MenuItem>
                        </Stack>

                        <Box sx={{ flexGrow: 0 }}>
                            {/* <IconButton size="large" aria-label="search" color="inherit">
                                <SearchIcon />
                            </IconButton> */}
                            <Tooltip title="Open settings">
                                <Button variant="contained" href={'./register'} style={{ color: 'white' }}>Register/SignIn</Button>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default Hello;
