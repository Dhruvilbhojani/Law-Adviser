import React from 'react';
import Navbar from '../components/Navbar';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Home() {
    return (
        <>
            <Navbar />
            <Box position="relative">
                <Stack direction="row" bgcolor="#4A154B" paddingBottom={5} paddingTop={5}>
                    <Box minWidth="55%" paddingBottom={10} paddingTop={5} paddingLeft={10} paddingRight={20}>
                        <Typography variant="h3" color="white" align="left" gutterBottom>
                            Free Legal Advice Online<br />From Top Rated Lawyers
                        </Typography>
                        <Typography variant="h6" color="white" align="left" gutterBottom>
                            Choose from over 10,000 lawyers across 700+ cities in India
                        </Typography>
                        <Stack direction="row" spacing={5}>
                            <Button variant="contained">Find Lawyer</Button>
                            <Button variant="contained">Ask Question</Button>
                        </Stack>
                    </Box>
                    <Box width="50%">Right</Box>
                </Stack>
                <Box
                    position="absolute"
                    bottom="-40px"
                    transform="translateX(-50%)"
                    left='28%'
                    paddingX={5}
                    minHeight={80}
                    bgcolor={'lightblue'}
                    borderRadius={3}
                    border={1}
                    borderColor={'black'}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Stack direction='row' justifyContent='space-between' align={'left'} spacing={4}>
                        <Stack >
                            <Typography variant='caption'>Search for</Typography>
                            <Typography fontWeight={'bold'}>Marriage, land, Finance</Typography>
                        </Stack>
                        <Stack>
                            <Typography variant='caption'>Search by Court</Typography>
                            <Typography fontWeight={'bold'}>Ahmedabad High Court</Typography>
                        </Stack>
                        <Stack>
                            <Typography variant='caption'>Location</Typography>
                            <Typography fontWeight={'bold'}>Ahmedabad</Typography>
                        </Stack>
                        <Button variant='contained'>
                            <IconButton size="small" edge="center" aria-label="search" color="inherit">
                                <SearchIcon />
                            </IconButton>
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </>
    );
}
