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
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function Advocate() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Stack
                direction={'row'}
                style={{ alignItems: 'center' }}
                spacing={2}
                sx={{
                    flexGrow: 1,
                    maxWidth: { xs: 'fit-content', sm: 'fit-content' },
                }}
            >
                <Card
                    style={{ backgroundColor: '#ECEEFD' }}
                    orientation="vertical"
                    sx={{
                        minWidth: 'fit-content',
                        overflow: 'auto'
                    }}
                >
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Stack direction='row' style={{ color: '#e28743' }}>
                            <Typography minWidth={'fit-content'}>4.8</Typography>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarHalfIcon />
                        </Stack>
                        <Stack direction={'row'} spacing={2}>
                            <VerifiedIcon />
                            <Typography>Verified</Typography>
                        </Stack>
                    </Stack>
                    <Stack direction={'row'}>
                        <Stack justifyContent={'space-around'}>
                            <AspectRatio ratio="1" sx={{ minWidth: 150 }} style={{ backgroundColor: '#ECEEFD' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                                    srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                                    loading="lazy"
                                    alt=""
                                    style={{ borderRadius: '50%', border: '1px solid black' }}
                                />
                            </AspectRatio>
                            <Typography fontSize="xl" fontWeight="lg">
                                Mit Chatrola
                            </Typography>
                            <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                Advocate
                            </Typography>
                            <Stack direction='row' justifyContent={'center'}>
                                <LocationOnIcon />
                                <Typography minWidth={'fit-content'}>Ahmedabad</Typography>
                            </Stack>
                        </Stack>
                        <CardContent align={'left'} style={{ marginLeft: '5%' }}>
                            <Stack alignItems={'space-between'} spacing={1}>
                                <Typography fontSize={'lg'} fontWeight={'bold'}>Practice Area & Skills</Typography>
                                <Typography>Arbitration, Cheque Bounce, Criminal, +3 More</Typography>
                                <Typography fontSize={'lg'} fontWeight={'bold'}>Hall of fame</Typography>
                                <Stack direction='row' spacing={2}>
                                    <img
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                                        srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                                        loading="lazy"
                                        alt=""
                                        style={{ borderRadius: '15%', border: '1px solid black', height: '50px' }}
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                                        srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                                        loading="lazy"
                                        alt=""
                                        style={{ borderRadius: '15%', border: '1px solid black', height: '50px' }}
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                                        srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                                        loading="lazy"
                                        alt=""
                                        style={{ borderRadius: '15%', border: '1px solid black', height: '50px' }}
                                    />
                                </Stack>
                                <Typography fontSize={'lg'} fontWeight={'bold'}>Medal</Typography>
                                <Stack direction='row' spacing={2}>
                                    <WorkspacePremiumIcon />
                                    <WorkspacePremiumIcon />
                                    <WorkspacePremiumIcon />
                                    <WorkspacePremiumIcon />
                                </Stack>
                                <Stack direction={'row'} spacing={2}>
                                    <Button>Send Message</Button>
                                    <Button>View Profile</Button>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Stack>
                </Card>

            </Stack>
        </>
    )
}
