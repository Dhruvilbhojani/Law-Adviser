import React from 'react'
import Navbar from "../components/Navbar"
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  const [loginData, setLoginData] = React.useState({
    "type": "enrollmentNumber",
    "password": "",
    "enrollmentNumber": ""
  });

  const handleProfileChange = (event) => {
    const { name, value } = event.target;
    // console.log(value);
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    fetch('https://nervous-cod-sneakers.cyclic.cloud/law-adviser/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify(loginData)
    }).then(res => res.json()).then(data => {
      if (data.result) {
        // console.log(data.data._id);
        localStorage.setItem('view-profile', JSON.stringify(data.data._id));
        navigate('/search-lawyer')
      }
    })
  };
  // console.log(loginData);
  return (
    <>
      <Navbar />
      <Stack marginY={5} justifyContent={'center'} alignItems={'center'}>
        <Stack direction={'row'} borderRadius={3} margin={2} border={1} borderColor={'black'} bgcolor={'#ECEEFD'} width={'50%'} >
          <Stack spacing={2} width={'70%'} alignItems={'center'}>
            <Stack width={'100%'} borderRadius={3} color={'white'} paddingY={2} alignItems={'center'} bgcolor={'blue'}>
              <Typography>Welcome Back to Legal!</Typography>
            </Stack>
            <Stack width={'100%'} padding={1} paddingX={2} alignItems={'center'} color={'#4A154B'}>
              <Typography fontWeight={'bold'} variant='h5'>Sign In</Typography>
            </Stack>
            <Stack width={'70%'} direction={'row'} borderRadius={2} borderColor={'black'} border={1} paddingY={1} spacing={2} justifyContent={'center'}>
              <img src="https://imgs.search.brave.com/GGfqhe5JWLY3UaWDEvF0gWcms1WLuMazF8a7gdTVctw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMzAwLzMwMDIy/MS5wbmc" width={25} height={25} alt="Image" />
              <Typography textAlign={'center'}>Continue with Google</Typography>
            </Stack>
            <Stack width={'70%'} direction={'row'} color={'#4A154B'} paddingY={1} justifyContent={'center'}>
              <Typography textAlign={'center'} variant={'caption'}>or use your email</Typography>
            </Stack>
            <TextField style={{ width: '70%' }} id="outlined-basic" label="Enrollment Number" name="enrollmentNumber" variant="outlined" value={setLoginData.enrollmentNumber} onChange={handleProfileChange} />
            <TextField style={{ width: '70%' }} id="outlined-basic" label="Password" variant="outlined" name="password" value={setLoginData.password} onChange={handleProfileChange} />
            <Typography textAlign={'right'} width={'70%'} variant={'caption'}>Forgot Passoword?</Typography>
            <Button variant={'contained'} onClick={handleSubmit}>Login</Button>
            <Typography textAlign={'center'} variant={'caption'}>Don't have an Account?
              <Typography textAlign={'center'} color={'#4A154B'} variant={'p'} paddingX={2} fontWeight={'bold'}>Sign up</Typography>
            </Typography>

          </Stack>
          <img src="https://media.istockphoto.com/id/1354842602/photo/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office.jpg?s=1024x1024&w=is&k=20&c=54vKxgvjNDIIluDBSM149PdK1J3cy_aAz-r3MS9WSfM=" width={'30%'} style={{ borderRadius: '12px' }} alt="Image" />
        </Stack>
      </Stack>
    </>
  )
}
