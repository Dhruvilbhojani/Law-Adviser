import React from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Stack, Tabs, Tab, tabsClasses } from '@mui/material';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import { Pin } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import WorkIcon from '@mui/icons-material/Work';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function FeaturedAdvocates() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Stack
                direction={'row'}
                style={{ backgroundColor: '#4A154B', alignItems: 'center' }}
                spacing={2}
                sx={{
                    flexGrow: 1,
                    maxWidth: { xs: 'fit-content', sm: 'fit-content' },
                }}
            >
                <ChevronLeftIcon fontSize='large' style={{color: 'white'}} />
                <Card
                    style={{ backgroundColor: '#4A154B' }}
                    orientation="horizontal"
                    sx={{
                        minWidth: 'fit-content',
                        overflow: 'auto'
                    }}
                >
                    <AspectRatio ratio="1" sx={{ minWidth: 200 }}>
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                            srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                    <CardContent align={'left'}>
                        <Typography fontSize="xl" fontWeight="lg" style={{ color: '#f0f0f0' }}>
                            Mit Chatrola
                        </Typography>
                        <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                            Advocate
                        </Typography>
                        <Stack spacing={1}>
                            <Stack direction='row' style={{ color: '#e28743' }}>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                                <Typography style={{ color: 'white' }} minWidth={'fit-content'}>4.8/5 (125+)</Typography>
                            </Stack>
                            <Stack direction='row' style={{ color: 'white' }}>
                                <LocationOnIcon />
                                <Typography style={{ color: 'white' }} minWidth={'fit-content'}>Ahmedabad</Typography>
                            </Stack>
                            <Stack direction='row' style={{ color: 'white' }}>
                                <WorkIcon />
                                <Typography style={{ color: 'white' }} minWidth={'fit-content'}>10+ Years</Typography>
                            </Stack>
                            <Stack direction='row' style={{ color: 'white' }}>
                                <AccountBalanceIcon />
                                <Typography style={{ color: 'white' }} minWidth={'fit-content'}>Supreme Court,... more</Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>
                <Card
                    style={{ backgroundColor: '#4A154B' }}
                    orientation="horizontal"
                    sx={{
                        minWidth: 'fit-content',
                        overflow: 'auto'
                    }}
                >
                    <AspectRatio ratio="1" sx={{ minWidth: 200 }}>
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                            srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                    <CardContent align={'left'}>
                        <Typography fontSize="xl" fontWeight="lg" style={{ color: '#f0f0f0' }}>
                            Mit Chatrola
                        </Typography>
                        <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                            Advocate
                        </Typography>
                        <Stack spacing={1}>
                            <Stack direction='row' style={{ color: '#e28743' }}>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                                <Typography style={{ color: 'white' }} minWidth={'fit-content'}>4.8/5 (125+)</Typography>
                            </Stack>
                            <Stack direction='row' style={{ color: 'white' }}>
                                <LocationOnIcon />
                                <Typography style={{ color: 'white' }} minWidth={'fit-content'}>Ahmedabad</Typography>
                            </Stack>
                            <Stack direction='row' style={{ color: 'white' }}>
                                <WorkIcon />
                                <Typography style={{ color: 'white' }} minWidth={'fit-content'}>10+ Years</Typography>
                            </Stack>
                            <Stack direction='row' style={{ color: 'white' }}>
                                <AccountBalanceIcon />
                                <Typography style={{ color: 'white' }} minWidth={'fit-content'}>Supreme Court,... more</Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>
                <ChevronRightIcon fontSize='large' style={{color: 'white'}}/>
            </Stack>
        </>
    )
}
