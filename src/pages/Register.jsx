import React from 'react'
import Navbar from "../components/Navbar"
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import ProfileDetails from '../components/ProfileDetails';

export default function Register() {

    const [popup, setPopup] = React.useState(false);

    const handleOpenPopup = () => {
        setPopup(true);
    }
    const handleClosePopup = () => {
        setPopup(false);
    }
    const [profile, setProfile] = React.useState({
        "password": "",
        "profileIcon": "",
        "fname": "",
        "lname": "",
        "designation": "",
        "location": "",
        "workingFrom": "",
        "userRating": 0.0,
        "verified": false,
        "hallOfFrames": [],
        "badges": [],
        "languages": [],
        "practiceArea": [],
        "description": "",
        "contactNumber": 0,
        "emailId": "",
        "enrollmentNumber": "",
        "gender": "",
        "ratedBy": 0,
        "publicQuestionReply": [],
        "courts": [],
        "blogs": [],
        "articles": [],
        "videos": [],
        "reviews": []
    }
    );
    const handleProfileChange = (event) => {
        const { name, value } = event.target;

        console.log(value);
        setProfile({
            ...profile,
            [name]: value,
        });
        console.log(profile);
    };
    return (
        <>
            <ProfileDetails profile={profile} setProfile={setProfile} handleProfileChange={handleProfileChange} open={popup} handleClose={handleClosePopup} />
            <Navbar />
            <Stack marginY={5} justifyContent={'center'} alignItems={'center'}>
                <Stack direction={'row'} borderRadius={3} margin={2} border={1} borderColor={'black'} bgcolor={'#ECEEFD'} width={'50%'} >
                    <Stack spacing={2} width={'70%'} alignItems={'center'}>
                        <Stack width={'100%'} borderRadius={3} color={'white'} paddingY={2} alignItems={'center'} bgcolor={'blue'}>
                            <Typography>Create an Account</Typography>
                        </Stack>
                        <Stack width={'100%'} padding={1} paddingX={2} alignItems={'center'} color={'#4A154B'}>
                            <Typography fontWeight={'bold'} variant='h5'>Sign Up</Typography>
                        </Stack>
                        <Typography width={'70%'} textAlign={'left'} variant={'caption'}>Create account as</Typography>
                        <Stack direction={'row'} justifyContent={'space-between'} width={'70%'}>
                            <Button variant='outlined' style={{ color: 'black', borderColor: 'black' }} size='small' >Advocate</Button>
                            <Button variant='outlined' style={{ color: 'black', borderColor: 'black' }} size='small'>Arbitrator</Button>
                            <Button variant='outlined' style={{ color: 'black', borderColor: 'black' }} size='small'>Notary</Button>
                            <Button variant='outlined' style={{ color: 'black', borderColor: 'black' }} size='small'>Client</Button>
                        </Stack>
                        {/* <Stack width={'70%'} direction={'row'} borderRadius={2} borderColor={'black'} border={1} paddingY={1} spacing={2} justifyContent={'center'}>
                            <img src="https://imgs.search.brave.com/GGfqhe5JWLY3UaWDEvF0gWcms1WLuMazF8a7gdTVctw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMzAwLzMwMDIy/MS5wbmc" width={25} height={25} alt="Image" />
                            <Typography textAlign={'center'}>Continue with Google</Typography>
                        </Stack> */}
                        {/* <Stack width={'70%'} direction={'row'} color={'#4A154B'} paddingY={1} justifyContent={'center'}>
                        </Stack> */}
                        <Stack direction={'row'} width={'70%'} spacing={2}>
                            <TextField style={{ width: '48%' }} id="outlined-basic" name='fname' label="First Name" variant="outlined" value={profile.fname} onChange={handleProfileChange} />
                            <TextField style={{ width: '48%' }} id="outlined-basic" name='lname' label="Last Name" variant="outlined" value={profile.lname} onChange={handleProfileChange} />
                        </Stack>
                        <TextField style={{ width: '70%' }} id="outlined-basic" name='enrollmentNumber' label="Enrollment Number" variant="outlined" value={profile.enrollmentNumber} onChange={handleProfileChange} />
                        <TextField style={{ width: '70%' }} id="outlined-basic" name='emailId' label="Email ID" variant="outlined" value={profile.emailId} onChange={handleProfileChange} />
                        <TextField style={{ width: '70%' }} id="outlined-basic" name='contactNumber' label="Mobile Number" variant="outlined" value={profile.contactNumber} onChange={handleProfileChange} />
                        <Stack direction={'row'} width={'70%'} spacing={2}>
                            <TextField style={{ width: '48%' }} id="outlined-basic" label="Password" variant="outlined" name={'password'} value={profile.password} onChange={handleProfileChange} />
                            <TextField style={{ width: '48%' }} id="outlined-basic" label="Confirm Password" variant="outlined" />
                        </Stack>
                        <Typography width={'70%'} textAlign={'center'} variant={'caption'}>By signing up on Legal, you agree to out Privacy Policy and terms of Use.</Typography>
                        <Button variant={'contained'} onClick={handleOpenPopup}>Signup</Button>
                        <Typography textAlign={'center'} variant={'caption'}>Already have an Account?
                            <Typography textAlign={'center'} color={'#4A154B'} variant={'p'} paddingX={2} fontWeight={'bold'}>Sign in</Typography>
                        </Typography>
                    </Stack>
                    <img src="https://media.istockphoto.com/id/1354842602/photo/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office.jpg?s=1024x1024&w=is&k=20&c=54vKxgvjNDIIluDBSM149PdK1J3cy_aAz-r3MS9WSfM=" width={'30%'} style={{ borderRadius: '12px' }} alt="Image" />
                </Stack>
            </Stack>
        </>
    )
}
