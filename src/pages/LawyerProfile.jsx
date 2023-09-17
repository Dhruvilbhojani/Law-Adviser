import React from 'react'
import Navbar from '../components/Navbar';
import { Stack, Typography, Button, Card, CardHeader, CardMedia, CardContent, CardActions } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';

export default function LawyerProfile() {
    const [advocate, setAdvocate] = React.useState({});
    React.useEffect(() => {
        const url = "https://naughty-suspenders-boa.cyclic.cloud/law-adviser/" + '65062e66a8a6f0bfebc6d4e2';
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setAdvocate(data);
                console.log(advocate);
            }
            )
            .catch((err) => { });
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <Stack padding={5} spacing={1}>
                <Stack direction={'row'}>
                    <Stack spacing={2}>
                        <img
                            src={advocate.profileIcon ? advocate.profileIcon : <p></p>}
                            srcSet={advocate.profileIcon}
                            alt=""
                            style={{ width: '300px', borderRadius: '50%', border: '1px solid black' }}
                        />
                        <Stack direction='row' justifyContent={'center'}>
                            <LocationOnIcon />
                            <Typography minWidth={'fit-content'}>{advocate.location}</Typography>
                        </Stack>
                    </Stack>
                    <Stack style={{ width: '-webkit-fill-available', alignItems: 'start', justifyContent: 'space-around' }} paddingX={3} paddingLeft={10} paddingY={1}>
                        <Stack direction={'row'} style={{ width: '-webkit-fill-available', justifyContent: 'space-between' }} alignItems={'center'}>
                            <Stack direction={'row'} spacing={2} alignItems={'center'}>
                                <Typography variant='h4' fontWeight={'bold'} textAlign={'left'}>
                                    {advocate.name}
                                </Typography>
                                <VerifiedIcon />
                            </Stack>
                            <Stack direction={'row'} spacing={2}>
                                <Button variant='outlined'>Send Message</Button>
                                <Button variant='contained'>View Contact Number</Button>
                            </Stack>

                        </Stack>
                        <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                            {advocate.designation}
                        </Typography>
                        <Stack direction='row' style={{ color: '#e28743' }}>
                            <Typography minWidth={'fit-content'}>{advocate.userRating}</Typography>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarHalfIcon />
                            <Typography paddingX={3} minWidth={'fit-content'}>({advocate.ratedBy})</Typography>
                        </Stack>

                        <Typography fontSize={'lg'} fontWeight={'bold'} >Enrollment Number</Typography>
                        <Typography>{advocate.enrollmentNumber}</Typography>

                        <Typography fontSize={'lg'} fontWeight={'bold'}>Hall of fame</Typography>
                        <Stack direction='row' spacing={2}>
                            {advocate.hallOfFrames ? (
                                advocate.hallOfFrames.map((hallOfFrame, index) => (
                                    <img
                                        key={index}
                                        src={hallOfFrame}
                                        alt=""
                                        style={{
                                            borderRadius: '15%',
                                            border: '1px solid black',
                                            height: '40px',
                                        }}
                                    />
                                ))
                            ) : (<p></p>)}
                        </Stack>
                        <Typography fontSize={'lg'} fontWeight={'bold'}>Medal</Typography>
                        <Stack direction='row' spacing={2}>
                            {advocate.badges ? (
                                advocate.badges.map((badge, index) => (
                                    <img
                                        key={index}
                                        src={badge}
                                        alt=""
                                        style={{
                                            borderRadius: '50%',
                                            border: '1px solid black',
                                            height: '35px',
                                        }}
                                    />
                                ))
                            ) : (<p></p>)}
                        </Stack>
                    </Stack>
                </Stack>
                <Stack padding={3} alignItems={'start'} spacing={2}>
                    <Stack direction={'row'} spacing={3} alignItems={'center'}>
                        <TranslateOutlinedIcon style={{ backgroundColor: 'blue', padding: '5', borderRadius: '50%', color: 'white' }} />
                        <Typography variant='h6' fontWeight={'bold'}>
                            Experience
                        </Typography>
                    </Stack>
                    <Typography variant='body'>
                        {Math.floor((new Date() - new Date(advocate.workingFrom)) / (1000 * 60 * 60 * 24 * 365.25))}+ Years
                    </Typography>
                </Stack>
                <Stack padding={3} alignItems={'start'} spacing={2}>
                    <Stack direction={'row'} spacing={3} alignItems={'center'}>
                        <TranslateOutlinedIcon style={{ backgroundColor: 'blue', padding: '5', borderRadius: '50%', color: 'white' }} />
                        <Typography variant='h6' fontWeight={'bold'}>
                            Languages
                        </Typography>
                    </Stack>
                    <Typography variant='body'>
                        {advocate.languages ? advocate.languages.join(', ') : <p></p>}
                    </Typography>
                </Stack>
                <Stack padding={3} alignItems={'start'} spacing={2}>
                    <Stack direction={'row'} spacing={3} alignItems={'center'}>
                        <TranslateOutlinedIcon style={{ backgroundColor: 'blue', padding: '5', borderRadius: '50%', color: 'white' }} />
                        <Typography variant='h6' fontWeight={'bold'}>
                            Courts
                        </Typography>
                    </Stack>
                    <Typography variant='body'>
                        {advocate.courts ? advocate.courts.join(', ') : <p></p>}
                    </Typography>
                </Stack>
                <Stack padding={3} alignItems={'start'} spacing={2}>
                    <Stack direction={'row'} spacing={3} alignItems={'center'}>
                        <TranslateOutlinedIcon style={{ backgroundColor: 'blue', padding: '5', borderRadius: '50%', color: 'white' }} />
                        <Typography variant='h6' fontWeight={'bold'}>
                            Practice Areas
                        </Typography>
                    </Stack>
                    <Typography variant='body' textAlign={'justify'}>
                        {advocate.practiceArea ? advocate.practiceArea.join(', ') : <p></p>}                    </Typography>
                </Stack>
                <Stack padding={3} alignItems={'start'} spacing={2}>
                    <Stack direction={'row'} spacing={3} alignItems={'center'}>
                        <TranslateOutlinedIcon style={{ backgroundColor: 'blue', padding: '5', borderRadius: '50%', color: 'white' }} />
                        <Typography variant='h6' fontWeight={'bold'}>
                            About
                        </Typography>
                    </Stack>
                    <Typography variant='body' textAlign={'justify'}>
                        {advocate.description}
                    </Typography>
                </Stack>
            </Stack>
            <Stack padding={8} spacing={1} textAlign={'start'} style={{ backgroundColor: '#ECEEFD' }} >
                <Typography variant='h5' color={'#4A154B'} fontWeight={'bold'}>
                    Legal Research Work
                </Typography>
                <Stack direction={'row'} spacing={2} style={{ overflowX: 'auto' }}>
                    {advocate.blogs ? advocate.blogs.map(blog =>
                        <Card sx={{ maxWidth: 345 }} style={{ border: '1px solid black', borderRadius: '10px', minWidth: '300px' }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={blog}
                                alt="Blog"
                            />
                            <CardHeader
                                title="Blog"
                            />
                            <CardContent>
                                <Typography variant="h6" color="text.secondary">
                                    Title of Blogs
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
                        </Card>) : <p></p>}
                    {advocate.articles ? advocate.articles.map(article =>
                        <Card sx={{ maxWidth: 345 }} style={{ border: '1px solid black', borderRadius: '10px', minWidth: '300px' }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={article}
                                alt="Article"
                            />
                            <CardHeader
                                title="Article"
                            />
                            <CardContent>
                                <Typography variant="h6" color="text.secondary">
                                    Title of Articles
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
                        </Card>) : <p></p>}
                    {advocate.videos ? advocate.videos.map(video =>
                        <Card sx={{ maxWidth: 345 }} style={{ border: '1px solid black', borderRadius: '10px', minWidth: '300px' }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={video}
                                alt="Video"
                            />
                            <CardHeader
                                title="Video"
                            />
                            <CardContent>
                                <Typography variant="h6" color="text.secondary">
                                    Title of Videos
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                </Typography>
                            </CardContent>
                            <CardActions style={{ justifyContent: 'center' }}>
                                <Button variant='text'>READ MORE VIDEOS</Button>
                            </CardActions>
                        </Card>) : <p></p>}
                </Stack>
            </Stack>
            <Stack padding={8} spacing={3} textAlign={'start'} >
                <Stack direction={'row'} justifyContent={'space-between'}>

                    <Typography variant='h5' color={'#4A154B'} fontWeight={'bold'}>
                        Popular Reviews
                    </Typography>
                    <Button variant={'contained'}>Write a Review</Button>
                </Stack>
                <Stack spacing={5}>
                    {advocate.reviews ? advocate.reviews.map(review =>
                        <Stack direction={'row'} justifyContent={'space-between'} spacing={5}>
                            <img
                                src={advocate.profileIcon ? advocate.profileIcon : <p></p>}
                                srcSet={advocate.profileIcon}
                                alt=""
                                style={{ maxWidth: '45px', maxHeight: '45px', borderRadius: '50%', border: '1px solid black' }}
                            />
                            <Stack style={{ width: '-webkit-fill-available', }} textAlign={'left'}>
                                <Stack direction={'row'} style={{ width: '30%' }} justifyContent={'space-between'}>
                                    <Typography fontWeight={'bold'}>{review.personName}</Typography>
                                    <Typography>{Math.floor((new Date() - new Date(review.date)) / (1000 * 60 * 60 * 24 * 365.25 / 12))} months ago</Typography>
                                </Stack>
                                <Stack direction='row' style={{ color: '#e28743' }}>
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarHalfIcon />
                                    <Typography minWidth={'fit-content'} paddingLeft={2}>{review.rating}</Typography>
                                </Stack>
                                <Typography>{review.message}</Typography>
                            </Stack>
                        </Stack>) : <p></p>}
                </Stack>
            </Stack>
            <Stack padding={8} spacing={3} textAlign={'start'} style={{ backgroundColor: '#ECEEFD' }} >
                <Typography variant='h5' color={'#4A154B'} fontWeight={'bold'}>
                    Questions Answeres by {advocate.designation} {advocate.name}
                </Typography>
                <Stack>
                    <Stack direction={'row'}>
                        <Typography color={'#E01E5A'} width={100}>Question</Typography>
                        <Typography fontWeight={'bold'}>Can you?</Typography>
                    </Stack>
                    <Stack direction={'row'}>
                        <Typography color={'#007A5A'} width={100}>Answer</Typography>
                        <Typography>Yes</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}
