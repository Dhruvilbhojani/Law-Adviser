import React from 'react'
import Navbar from '../components/Navbar';
import AskQuestions from '../components/AskQuestions';
import { Subject } from '@mui/icons-material';
import { Stack, TextField, Input, Typography, InputLabel, FormControl, Select, MenuItem, Button } from '@mui/material'
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';

export default function LawAdvice() {
    return (
        <>
            <Navbar />
            <Stack direction={'row'}>
                <Stack bgcolor={'#ECEEFD'} style={{ width: '70%', height: '100%' }} padding={5} spacing={1} justifyContent={'center'} >
                    <Stack>
                        <Stack>
                            <Typography variant={'h5'} fontWeight={'bold'} color={'#4A154B'}>
                                Subject of the Questions
                            </Typography>
                            <Typography variant={'caption'}>
                                Divorce
                            </Typography>
                            <Typography paddingTop={2}>
                                Hi, My wife is forcing me for mutual consent threatening to file for domestic violence. She also needs to sign to release all her rights from my business. I cannot risk that as her family has the political background to spoil my business. If I sign a mutual petition with an unfair share of the property, will I get a chance to let the court know I was forced to sign but I am not satisfied with the settlement demand in the next steps after filing the petition? So that I will be given a chance to?
                            </Typography>
                        </Stack>
                        <Stack paddingY={3}>
                            <Typography fontWeight={'bold'} style={{ color: 'green' }}>Answers</Typography>
                            <Stack direction={'row'} paddingTop={3} spacing={3}>
                                <img src='https://avatars.githubusercontent.com/u/98873167?v=4' style={{ borderRadius: '50%', width: '50px', height: '50px' }}></img>
                                <Stack>
                                    <Stack direction={'row'} spacing={5}>
                                        <Typography fontWeight={'bold'}>Om Sorathiya</Typography>
                                        <Typography>Advocate</Typography>
                                    </Stack>
                                    <Typography>Would advise you to immediately seek a legal consultation from a lawyer having expertise in family matters. Brief him and formulate a strategy going forward. As a precautionary measure do get an intallah peshbandi application drafted from a lawyer and file. Once you sign it, you Will not be able to take a plea later. Connect with better particulars</Typography>
                                </Stack>
                            </Stack>
                            <Stack direction={'row'} paddingY={3} spacing={3}>
                                <img src='https://avatars.githubusercontent.com/u/98873167?v=4' style={{ borderRadius: '50%', width: '50px', height: '50px' }}></img>
                                <Stack>
                                    <Stack direction={'row'} spacing={5}>
                                        <Typography fontWeight={'bold'}>Om Sorathiya</Typography>
                                        <Typography>Advocate</Typography>
                                    </Stack>
                                    <Typography>Would advise you to immediately seek a legal consultation from a lawyer having expertise in family matters. Brief him and formulate a strategy going forward. As a precautionary measure do get an intallah peshbandi application drafted from a lawyer and file. Once you sign it, you Will not be able to take a plea later. Connect with better particulars</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Typography variant={'h5'} fontWeight={'bold'} color={'#4A154B'}>
                                Subject of the Questions
                            </Typography>
                            <Typography variant={'caption'}>
                                Divorce
                            </Typography>
                            <Typography paddingTop={2}>
                                Hi, My wife is forcing me for mutual consent threatening to file for domestic violence. She also needs to sign to release all her rights from my business. I cannot risk that as her family has the political background to spoil my business. If I sign a mutual petition with an unfair share of the property, will I get a chance to let the court know I was forced to sign but I am not satisfied with the settlement demand in the next steps after filing the petition? So that I will be given a chance to?
                            </Typography>
                        </Stack>
                        <Stack paddingY={3}>
                            <Typography fontWeight={'bold'} style={{ color: 'green' }}>Answers</Typography>
                            <Stack direction={'row'} paddingTop={3} spacing={3}>
                                <img src='https://avatars.githubusercontent.com/u/98873167?v=4' style={{ borderRadius: '50%', width: '50px', height: '50px' }}></img>
                                <Stack>
                                    <Stack direction={'row'} spacing={5}>
                                        <Typography fontWeight={'bold'}>Om Sorathiya</Typography>
                                        <Typography>Advocate</Typography>
                                    </Stack>
                                    <Typography>Would advise you to immediately seek a legal consultation from a lawyer having expertise in family matters. Brief him and formulate a strategy going forward. As a precautionary measure do get an intallah peshbandi application drafted from a lawyer and file. Once you sign it, you Will not be able to take a plea later. Connect with better particulars</Typography>
                                </Stack>
                            </Stack>
                            <Stack direction={'row'} paddingY={3} spacing={3}>
                                <img src='https://avatars.githubusercontent.com/u/98873167?v=4' style={{ borderRadius: '50%', width: '50px', height: '50px' }}></img>
                                <Stack>
                                    <Stack direction={'row'} spacing={5}>
                                        <Typography fontWeight={'bold'}>Om Sorathiya</Typography>
                                        <Typography>Advocate</Typography>
                                    </Stack>
                                    <Typography>Would advise you to immediately seek a legal consultation from a lawyer having expertise in family matters. Brief him and formulate a strategy going forward. As a precautionary measure do get an intallah peshbandi application drafted from a lawyer and file. Once you sign it, you Will not be able to take a plea later. Connect with better particulars</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>

                    {/* <Button variant='contained' style={{ alignSelf: 'center', width: 'fit-content' }}>Submit</Button> */}
                </Stack>
                <Stack style={{ height: '--webkit-fill-available', width: '30%' }}>
                    <Stack spacing={2} paddingY={5} paddingX={3}>
                        <Typography variant='h5' fontWeight={'bold'}>Latest Legal Answers</Typography>
                        <Stack direction={'row'} spacing={2} alignItems={'center'} paddingBottom={3}>
                            <CallMadeOutlinedIcon style={{ color: 'blue' }} />
                            <Typography> Subject of the Question Shown here</Typography>
                        </Stack>
                        <Stack direction={'row'} spacing={2} alignItems={'center'} paddingBottom={3}>
                            <CallMadeOutlinedIcon style={{ color: 'blue' }} />
                            <Typography> Subject of the Question Shown here</Typography>
                        </Stack>
                        <Stack direction={'row'} spacing={2} alignItems={'center'} paddingBottom={3}>
                            <CallMadeOutlinedIcon style={{ color: 'blue' }} />
                            <Typography> Subject of the Question Shown here</Typography>
                        </Stack>
                        <Stack direction={'row'} spacing={2} alignItems={'center'} paddingBottom={3}>
                            <CallMadeOutlinedIcon style={{ color: 'blue' }} />
                            <Typography> Subject of the Question Shown here</Typography>
                        </Stack>
                        <Stack direction={'row'} spacing={2} alignItems={'center'} paddingBottom={3}>
                            <CallMadeOutlinedIcon style={{ color: 'blue' }} />
                            <Typography> Subject of the Question Shown here</Typography>
                        </Stack>
                        <Stack direction={'row'} spacing={2} alignItems={'center'} paddingBottom={3}>
                            <CallMadeOutlinedIcon style={{ color: 'blue' }} />
                            <Typography> Subject of the Question Shown here</Typography>
                        </Stack>
                        <Stack direction={'row'} spacing={2} alignItems={'center'} paddingBottom={3}>
                            <CallMadeOutlinedIcon style={{ color: 'blue' }} />
                            <Typography> Subject of the Question Shown here</Typography>
                        </Stack>
                        <Stack direction={'row'} spacing={2} alignItems={'center'} paddingBottom={3}>
                            <CallMadeOutlinedIcon style={{ color: 'blue' }} />
                            <Typography> Subject of the Question Shown here</Typography>
                        </Stack>
                        {/* <Stack direction={'row'} spacing={2} alignItems={'center'} paddingBottom={6}>
                            <CallMadeOutlinedIcon  style={{color: 'blue'}} />
                            <Typography> Subject of the Question Shown here</Typography>
                        </Stack> */}
                        <Button variant='contained' style={{ alignSelf: 'center', width: 'fit-content' }}>View All Questions</Button>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}
