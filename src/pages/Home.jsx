import React from 'react';
import Navbar from '../components/Navbar';
import { Box, Button, Card, CardActionArea, CardHeader, Avatar, CardMedia, CardActions, CardContent, IconButton, Stack, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import img14 from '../imgs/image14.png'
import FeaturedAdvocates from '../components/FeaturedAdvocates';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import right from '../imgs/right.svg'
import mediator from '../imgs/mediator.webp'
import notary from '../imgs/notary.webp'
import arbitrator from '../imgs/arbitrator.webp'
import lac from '../imgs/lac.webp'


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
                    <Box width="50%">
                        {/* <Avatar alt="Profile Image" src={right} /> */}
                        <img src={right}></img>
                    </Box>
                </Stack>
                <Box
                    position="absolute"
                    bottom="-40px"
                    transform="translateX(-50%)"
                    left='25%'
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
            <Box paddingY={9} textAlign={'center'}>
                <Typography variant='h4' fontWeight={'bold'}>Our Services</Typography>
                <Stack direction={'row'} paddingTop={5} justifyContent={'center'} spacing={10}>

                    <Card sx={{ maxWidth: 345 }} variant='outlined'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                style={{ width: '200px' }}
                                image={arbitrator}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Arbitrators
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Description
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/* <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                    </CardActions> */}
                    </Card>
                    <Card sx={{ maxWidth: 345 }} variant='outlined'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                style={{ width: '200px' }}
                                image={mediator}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Mediators
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Description
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/* <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                    </CardActions> */}
                    </Card>
                    <Card sx={{ maxWidth: 345 }} variant='outlined'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                style={{ width: '200px' }}
                                image={notary}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Notaries
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Description
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/* <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                    </CardActions> */}
                    </Card>
                    <Card sx={{ maxWidth: 345 }} variant='outlined'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                style={{ width: '300px' }}
                                height="140"
                                image={lac}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Legal Aid Clinics
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Description
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/* <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                    </CardActions> */}
                    </Card>
                </Stack>
            </Box>
            <Box bgcolor="#4A154B" paddingY={5} textAlign={'center'}>
                <Typography variant='h4' paddingBottom={3} color={'white'} fontWeight={'bold'}>Featured Advocates</Typography>
                <Stack spacing={2} alignItems={'start'} style={{ alignItems: 'center' }}>
                    <Stack direction="row" spacing={25} justifyContent={'space-between'} style={{ alignItems: 'space-between' }}>
                        <Stack direction="row" spacing={2}>
                            <Button variant="text" style={{ color: 'white' }}>CRIMINAL</Button>
                            <Button variant="text" style={{ color: 'white' }}>SUPREME COURT</Button>
                            <Button variant="text" style={{ color: 'white' }}>FAMILY</Button>
                            <Button variant="text" style={{ color: 'white' }}>CORPORATE</Button>
                            <Button variant="text" style={{ color: 'white' }}>LABOR AND SERVICES</Button>
                        </Stack>
                        <Button variant='text' style={{ color: 'white' }}>View All</Button>
                    </Stack>
                    <Stack direction="row" spacing={2} justifyContent={'space-around'}>
                        <FeaturedAdvocates />
                    </Stack>
                </Stack>
            </Box>
            <Box paddingY={5} textAlign={'center'}>
                <Typography variant='h4' paddingBottom={3} fontWeight={'bold'}>Trending Topics</Typography>
                <Stack direction={'row'} spacing={2} style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <ChevronLeft fontSize='large' />
                    <Card sx={{ maxWidth: 345 }} style={{ border: '1px solid black', borderRadius: '10px' }} >
                        <CardHeader
                            title="Blog"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={img14}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="h6" color="text.secondary">
                                Title of Blog
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: 'center' }}>
                            <Button variant='text'>READ MORE BLOGS</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }} style={{ border: '1px solid black', borderRadius: '10px' }} >
                        <CardHeader
                            title="Article"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={img14}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="h6" color="text.secondary">
                                Title of Article
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: 'center' }}>
                            <Button variant='text'>READ MORE ARTICLES</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }} style={{ border: '1px solid black', borderRadius: '10px' }} >
                        <CardHeader
                            title="Latest News"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={img14}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="h6" color="text.secondary">
                                Title of News
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: 'center' }}>
                            <Button variant='text'>READ MORE NEWS</Button>
                        </CardActions>
                    </Card>
                    <ChevronRight fontSize='large' />
                </Stack>
            </Box>
        </>
    );
}
