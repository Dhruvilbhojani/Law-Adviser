import React from 'react'
import Navbar from '../components/Navbar';
import AskQuestions from '../components/AskQuestions';
import { Subject } from '@mui/icons-material';
import { Stack, TextField, Input, Typography, InputLabel, FormControl, Select, MenuItem, Button } from '@mui/material'
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import Ans from '../components/Ans';

export default function LawAdvice() {

    const [data, setData] = React.useState([]);
    React.useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('https://nervous-cod-sneakers.cyclic.cloud/qa'); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result.map((res) => res));
                // setData(result);
                // console.log(data) // Update the state variable with the fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])
    console.log(data) // Update the state variable with the fetched data

    return (
        <>
            <Navbar />
            <Stack direction={'row'}>
                <Stack bgcolor={'#ECEEFD'} style={{ width: '70%', height: '100%' }} padding={5} spacing={1} justifyContent={'center'} >

                    {data[0] ?
                        data.map(qa =>
                            <Stack>
                                <Stack>
                                    <Typography variant={'h5'} fontWeight={'bold'} color={'#4A154B'}>
                                        {qa.title}
                                    </Typography>
                                    <Typography variant={'caption'}>
                                        {qa.category}
                                    </Typography>
                                    <Typography paddingTop={2}>
                                        {qa.que}
                                    </Typography>
                                </Stack>
                                <Stack paddingY={3}>
                                    <Typography fontWeight={'bold'} style={{ color: 'green' }}>Answers</Typography>
                                    {qa.answers ? qa.answers.map(ans =>
                                        <>
                                            <Ans ans={ans} />
                                            {/* <Stack direction={'row'} paddingTop={3} spacing={3}>
                                                <img src='https://avatars.githubusercontent.com/u/98873167?v=4' style={{ borderRadius: '50%', width: '50px', height: '50px' }}></img>
                                                <Stack>
                                                    <Stack direction={'row'} spacing={5}>
                                                        <Typography fontWeight={'bold'}>{ans.user}</Typography>
                                                        <Typography>Advocate</Typography>
                                                    </Stack>
                                                    <Typography>Would advise you to immediately seek a legal consultation from a lawyer having expertise in family matters. Brief him and formulate a strategy going forward. As a precautionary measure do get an intallah peshbandi application drafted from a lawyer and file. Once you sign it, you Will not be able to take a plea later. Connect with better particulars</Typography>
                                                </Stack>
                                            </Stack> */}

                                        </>
                                    ) : <></>}

                                </Stack>
                            </Stack>
                        )
                        : <></>}
                    {/* <Button variant='contained' style={{ alignSelf: 'center', width: 'fit-content' }}>Submit</Button> */}
                </Stack>
                <Stack style={{ height: '--webkit-fill-available', width: '30%' }}>
                    <Stack spacing={2} paddingY={5} paddingX={3}>
                        <Typography variant='h5' fontWeight={'bold'}>Latest Legal Answers</Typography>
                        {data[0] ?
                            data.map(qa =>
                                <Stack direction={'row'} spacing={2} alignItems={'center'} paddingBottom={3}>
                                    <CallMadeOutlinedIcon style={{ color: 'blue' }} />
                                    <Stack>
                                        <Typography variant='h6' fontWeight={'bold'}> {qa.title}</Typography>
                                        <Typography> {qa.que}</Typography>
                                    </Stack>
                                </Stack>
                            ) : <></>
                        }
                        <Button variant='contained' style={{ alignSelf: 'center', width: 'fit-content' }}>View All Questions</Button>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}
