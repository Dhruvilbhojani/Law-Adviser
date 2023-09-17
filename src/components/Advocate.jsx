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

export default function Advocate(props) {
    const advocate = props.advocateDetails;

    const viewProfile = (e) => {
        console.log(e.target.value);
    }
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
                        minWidth: '100%',
                        overflow: 'auto'
                    }}
                >
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Stack direction='row' style={{ color: '#e28743' }}>
                            <Typography minWidth={'fit-content'}>{advocate.userRating}</Typography>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarHalfIcon />
                        </Stack>
                        {advocate.verified ?
                            <Stack direction={'row'} spacing={2}>
                                <VerifiedIcon />
                                <Typography>Verified</Typography>
                            </Stack> : <p></p>
                        }
                    </Stack>
                    <Stack direction={'row'}>
                        <Stack justifyContent={'space-around'} alignItems={'center'}>
                            <img
                                src={advocate.profileIcon ? advocate.profileIcon : <p></p>}
                                srcSet={advocate.profileIcon}
                                alt=""
                                style={{ width: '150px', borderRadius: '50%', border: '1px solid black' }}
                            />
                            <Typography fontSize="xl" fontWeight="lg">
                                {advocate.name}
                            </Typography>
                            <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                {advocate.designation}
                            </Typography>
                            <Stack direction='row' justifyContent={'center'}>
                                <LocationOnIcon />
                                <Typography minWidth={'fit-content'}>{advocate.location}</Typography>
                            </Stack>
                        </Stack>
                        <CardContent align={'left'} style={{ marginLeft: '7%' }}>
                            <Stack alignItems={'space-between'} spacing={1}>
                                <Typography fontSize={'lg'} fontWeight={'bold'}>Practice Area & Skills</Typography>
                                <Typography>{advocate.practiceArea ? advocate.practiceArea.join(', ') : <p></p>}</Typography>
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
                                <Stack direction={'row'} spacing={2}>
                                    <Button variant='outlined'>Send Message</Button>
                                    <Button value={advocate._id} onClick={viewProfile}>View Profile</Button>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Stack>
                </Card>

            </Stack>
        </>
    )
}
