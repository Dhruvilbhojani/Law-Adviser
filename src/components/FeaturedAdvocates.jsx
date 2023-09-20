import React from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Stack } from '@mui/material';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import WorkIcon from '@mui/icons-material/Work';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function FeaturedAdvocates() {
    const [value, setValue] = React.useState(0);
    const [filteredAdvocates, setFilteredAdvocates] = React.useState([{}]);
    const featuredData = [];
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    let item1;
    let item2;


    React.useEffect(() => {
        fetch("https://nervous-cod-sneakers.cyclic.cloud/law-adviser")
            .then((res) => res.json())
            .then((data) => {
                setFilteredAdvocates(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    // console.log(filteredAdvocates);
    return (
        <>
            <Stack
                direction={'row'}
                style={{ backgroundColor: '#4A154B', alignItems: 'center', maxWidth: '80%' }}
                spacing={2}
                sx={{
                    flexGrow: 1,
                    maxWidth: { xs: 'fit-content', sm: 'fit-content' },
                }}
            >
                <ChevronLeftIcon fontSize='large' style={{ color: 'white' }} />
                {/* {Array.from({ length: 2 }).map((_, index) => (
                    <li key={index}>Iteration {index + 1}</li>
                ))} */}
                {filteredAdvocates[0] ? <Card
                    style={{ backgroundColor: '#4A154B' }}
                    orientation="horizontal"
                    sx={{
                        // minWidth: 'fit-content',
                        maxWidth: '45%',
                        minWidth: '45%',
                        overflow: 'hidden',
                        height: '200px'
                    }}
                >
                    <AspectRatio ratio="1" sx={{ minWidth: 200 }}>
                        <img
                            src={filteredAdvocates[0].profileIcon}
                            srcSet={filteredAdvocates[0].profileIcon}
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                    <CardContent align={'left'}>
                        <Typography fontSize="xl" fontWeight="lg" style={{ color: '#f0f0f0' }}>
                            {filteredAdvocates[0].name}
                        </Typography>
                        <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                            {filteredAdvocates[0].designation}
                        </Typography>
                        <Stack spacing={1}>
                            <Stack direction='row' style={{ color: '#e28743' }}>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                                <Typography style={{ color: 'white' }} minWidth={'fit-content'}>{filteredAdvocates[0].userRating}/5 ({filteredAdvocates[0].ratedBy}+)</Typography>
                            </Stack>
                            <Stack direction='row' style={{ color: 'white' }}>
                                <LocationOnIcon />
                                <Typography style={{ color: 'white' }} minWidth={'fit-content'}>{filteredAdvocates[0].location}</Typography>
                            </Stack>
                            <Stack direction='row' style={{ color: 'white' }}>
                                <WorkIcon />
                                <Typography style={{ color: 'white' }} minWidth={'fit-content'}>{filteredAdvocates[0].workingFrom}+ Years</Typography>
                            </Stack>
                            <Stack direction='row' style={{ color: 'white' }}>
                                <AccountBalanceIcon />
                                <Typography style={{ color: 'white' }} minWidth={'fit-content'}>{filteredAdvocates[0].courts}</Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card> : <p></p>}
                {filteredAdvocates[1] ? <Card
                    style={{ backgroundColor: '#4A154B' }}
                    orientation="horizontal"
                    sx={{
                        // minWidth: 'fit-content',
                        maxWidth: '45%',
                        minWidth: '45%',
                        overflow: 'hidden',
                        height: '200px'
                    }}
                >
                    <AspectRatio ratio="1" sx={{ minWidth: 200 }}>
                        <img
                            src={filteredAdvocates[1].profileIcon}
                            srcSet={filteredAdvocates[1].profileIcon}
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                    <CardContent align={'left'}>
                        <Typography fontSize="xl" fontWeight="lg" style={{ color: '#f0f0f0' }}>
                            {filteredAdvocates[1].name}
                        </Typography>
                        <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                            {filteredAdvocates[1].designation}
                        </Typography>
                        <Stack spacing={1}>
                            <Stack direction='row' style={{ color: '#e28743' }}>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                                <Typography style={{ color: 'white' }} minWidth={'fit-content'}>{filteredAdvocates[1].userRating}/5 ({filteredAdvocates[1].ratedBy}+)</Typography>
                            </Stack>
                            <Stack direction='row' style={{ color: 'white' }}>
                                <LocationOnIcon />
                                <Typography style={{ color: 'white' }} minWidth={'fit-content'}>{filteredAdvocates[1].location}</Typography>
                            </Stack>
                            <Stack direction='row' style={{ color: 'white' }}>
                                <WorkIcon />
                                <Typography style={{ color: 'white' }} minWidth={'fit-content'}>{filteredAdvocates[1].workingFrom}+ Years</Typography>
                            </Stack>
                            <Stack direction='row' style={{ color: 'white' }}>
                                <AccountBalanceIcon />
                                <Typography style={{ color: 'white' }} minWidth={'fit-content'}>{filteredAdvocates[1].courts}</Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card> : <p></p>}

                {/* <Card
                    style={{ backgroundColor: '#4A154B' }}
                    orientation="horizontal"
                    sx={{
                        // minWidth: 'fit-content',
                        maxWidth: '45%',
                        minWidth: '45%',
                        overflow: 'hidden',
                        height: '200px'
                    }}
                >
                    <AspectRatio ratio="1" sx={{ minWidth: 200 }}>
                        <img
                            src={filteredAdvocates[1].profileIcon}
                            srcSet={filteredAdvocates[1].profileIcon}
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                    <CardContent align={'left'}>
                        <Typography fontSize="xl" fontWeight="lg" style={{ color: '#f0f0f0' }}>
                            {filteredAdvocates[1].name}
                        </Typography>
                        <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                            {filteredAdvocates[1].designation}
                        </Typography>
                        <Stack spacing={1}>
                            <Stack direction='row' style={{ color: '#e28743' }}>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                                <Typography style={{ color: 'white' }} minWidth={'fit-content'}>{filteredAdvocates[1].userRating}/5 ({filteredAdvocates[1].ratedBy}+)</Typography>
                            </Stack>
                            <Stack direction='row' style={{ color: 'white' }}>
                                <LocationOnIcon />
                                <Typography style={{ color: 'white' }} minWidth={'fit-content'}>{filteredAdvocates[1].location}</Typography>
                            </Stack>
                            <Stack direction='row' style={{ color: 'white' }}>
                                <WorkIcon />
                                <Typography style={{ color: 'white' }} minWidth={'fit-content'}>{filteredAdvocates[1].workingFrom}+ Years</Typography>
                            </Stack>
                            <Stack direction='row' style={{ color: 'white' }}>
                                <AccountBalanceIcon />
                                <Typography style={{ color: 'white' }} minWidth={'fit-content'}>{filteredAdvocates[1].courts}</Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card> */}

                <ChevronRightIcon fontSize='large' style={{ color: 'white' }} />
            </Stack>
        </>
    )
}
