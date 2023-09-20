import React from 'react'
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Stack } from '@mui/material';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Link } from 'react-router-dom';

export default function Advocate(props) {
    const advocate = props.advocateDetails;

    const viewProfile = (e) => {
        console.log(e.target.value);
        const item = e.target.value;
        localStorage.setItem('view-profile', JSON.stringify(item));
    }
    return (
        <>
            <Stack
                direction={'row'}
                style={{ alignItems: 'center' }}
                spacing={2}
                minWidth={'100%'} maxWidth={'100%'}
                minHeight={'93%'} maxHeight={'93%'}
                sx={{
                    flexGrow: 1,
                    // maxWidth: { xs: 'fit-content', sm: 'fit-content' },
                    // minWidth: { xs: 'fit-content', sm: 'fit-content' },
                }}
            >
                <Card
                    style={{ backgroundColor: '#ECEEFD' }}
                    orientation="vertical"
                    sx={{
                        minWidth: '100%',
                        overflow: 'auto',
                        minHeight: '370px',
                        maxHeight: '370px'
                    }}
                >
                    <Stack direction={'row'} justifyContent={'space-between'} paddingLeft={5}>
                        <Stack></Stack>
                        {advocate.verified ?
                            <Stack direction={'row'} spacing={2}>
                                <VerifiedIcon />
                                <Typography>Verified</Typography>
                            </Stack> : <p></p>
                        }
                    </Stack>
                    <Stack direction={'row'} paddingLeft={5}>
                        <Stack justifyContent={'space-around'} alignItems={'center'}>
                            <img
                                src={advocate.profileIcon ? advocate.profileIcon : <p></p>}
                                srcSet={advocate.profileIcon ? advocate.profileIcon : <p></p>}
                                alt=""
                                style={{ width: '150px', height: '150px', borderRadius: '50%', border: '1px solid black' }}
                            />
                            <Typography fontSize="xl" fontWeight="bold">
                                {advocate.name}
                            </Typography>
                            <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                {advocate.designation}
                            </Typography>
                            <Stack direction='row' justifyContent={'center'}>
                                <LocationOnIcon />
                                <Typography minWidth={'fit-content'}>{advocate.location}</Typography>
                            </Stack>
                            <Stack direction='row' style={{ color: '#e28743' }}>
                                <Typography minWidth={'fit-content'}>{advocate.userRating}</Typography>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                            </Stack>
                        </Stack>
                        <CardContent align={'left'} style={{ marginLeft: '7%', minHeight: '300px' }}>
                            <Stack alignItems={'start'} justifyContent={'space-between'} style={{ minHeight: '300px' }} spacing={1}>
                                <Typography fontSize={'lg'} fontWeight={'lg'}>Practice Area & Skills</Typography>
                                <Typography>{advocate.practiceArea ? advocate.practiceArea.join(', ') : <p></p>}</Typography>


                                {advocate.courts[0] ? <Typography fontSize={'lg'} fontWeight={'lg'}>Courts</Typography> : <p></p>}
                                <Stack direction='row' spacing={2}>
                                    {advocate.courts ? <Typography textAlign={'justify'}>{advocate.courts ? advocate.courts.join(', ') : <p></p>}</Typography> : (<p></p>)}
                                </Stack>
                                {advocate.badges ? <Typography fontSize={'lg'} fontWeight={'lg'}>Medal</Typography> : <p></p>}
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
                                <Stack direction={'row'} spacing={2}>
                                    <Button variant='outlined'>Send Message</Button>
                                    <Link to={`/lawyer-profile`} style={{ textDecoration: 'none' }}>
                                        <Button value={advocate._id} onClick={viewProfile}>View Profile</Button>
                                    </Link>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Stack>
                </Card>

            </Stack>
        </>
    )
}
