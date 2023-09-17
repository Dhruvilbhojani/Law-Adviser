import { Subject } from '@mui/icons-material';
import { Stack, TextField, Input, Typography, InputLabel, FormControl, Select, MenuItem, Button } from '@mui/material'
import React from 'react'
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';

export default function AskQuestions() {
    const [cities, setCities] = React.useState([]);
    const [categories, setCategories] = React.useState([]);

    React.useEffect(() => {
        fetch("https://mocki.io/v1/402c3e73-1b7e-4311-824e-6de10406a2eb")
            .then((res) => res.json())
            .then((data) => {
                setCities(data.results.map((city) => city.text));
            })
            .catch((err) => { });
        fetch("https://mocki.io/v1/36649834-713d-4a9b-add5-53ae5c26800c")
            .then((res) => res.json())
            .then((data) => {
                setCategories(data.results.map((category) => category.text));
            })
            .catch((err) => { });
    }, []);

    const [addQuestion, setAddQuestion] = React.useState({ category: '', city: '', subject: '', question: '' });
    const [name, setName] = React.useState('');
    const handleQuestionData = (property, value) => {
        setAddQuestion((prevData) => ({
            ...prevData,
            [property]: value,
        }));
    };
    const [clientData, setClientData] = React.useState({ name: '', email: '', number: '' });
    const handleClientData = (property, value) => {
        setClientData((prevData) => ({
            ...prevData,
            [property]: value,
        }));
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    // const handleCategoryChange = (e) => {
    //     setCategory(e.target.value);
    // }
    return (
        <>
            <Stack direction={'row'}>
                <Stack style={{ width: '60%', height: '100%' }} padding={5} spacing={1} justifyContent={'center'} >
                    <Stack spacing={2}>
                        <Typography variant='h5' fontWeight={'bold'}>Ask a Free Legal Question</Typography>
                        <Typography justify>Stuck with a legal issue? Submit your query below to get FREE answers by email within a few hours. Expert legal advice from top rated lawyers in your city enables you to take better decisions about your legal situation.</Typography>
                    </Stack>
                    <Stack >

                        <FormControl variant="standard" sx={{ m: 1 }}>
                            <InputLabel id={'labelId'}  >Area of Law</InputLabel>
                            <Select
                                labelId={'labelId'}
                                id={'id'}
                                value={addQuestion.category}
                                onChange={(e) => handleQuestionData('category', e.target.value)}
                                label={'Area of Law'}
                                placeholder='Select area of law'
                                style={{ textAlign: 'left' }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {categories.map((option, index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 1 }}>
                            <InputLabel id={'labelId'}  >City</InputLabel>
                            <Select
                                labelId={'labelId'}
                                id={'id'}
                                value={addQuestion.city}
                                onChange={(e) => handleQuestionData('city', e.target.value)}
                                label={'City'}
                                defaultValue='a'
                                placeholder='Select your City'
                                style={{ textAlign: 'left' }}
                            >
                                <MenuItem value="" disabled>
                                    Select your currency
                                </MenuItem>
                                {cities.map((option, index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 1 }}>
                            <InputLabel id={'labelId'}  >Subject</InputLabel>
                            <Input
                                labelId={'labelId'}
                                id={'id'}
                                value={addQuestion.subject}
                                onChange={(e) => handleQuestionData('subject', e.target.value)}
                                label={'Subject'}
                                placeholder='Enter subject of your Question'
                                style={{ textAlign: 'left' }}
                            />
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 1 }}>
                            <InputLabel id={'labelId'}  >Question</InputLabel>
                            <Input
                                labelId={'labelId'}
                                id={'id'}
                                value={addQuestion.question}
                                onChange={(e) => handleQuestionData('question', e.target.value)}
                                label={'Question'}
                                placeholder='Enter your Question'
                                style={{ textAlign: 'left' }}
                            />
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 1 }}>
                            <InputLabel id={'labelId'}  >Name</InputLabel>
                            <Input
                                labelId={'labelId'}
                                id={'id'}
                                value={clientData.name}
                                onChange={(e) => handleClientData('name', e.target.value)}
                                label={'Name'}
                                placeholder='Enter your Name'
                                style={{ textAlign: 'left' }}
                            />
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 1 }}>
                            <InputLabel id="labelId">Phone Number</InputLabel>
                            <Input
                                labelId="labelId"
                                id="id"
                                value={clientData.number}
                                onChange={(e) => handleClientData("number", e.target.value)}
                                label="Phone Number"
                                placeholder="Enter your Phone Number"
                                style={{ textAlign: "left" }}
                            />
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 1 }}>
                            <InputLabel id={'labelId'}  >Mail ID</InputLabel>
                            <Input
                                labelId={'labelId'}
                                id={'id'}
                                value={clientData.email}
                                onChange={(e) => handleClientData('email', e.target.value)}
                                label={'Mail ID'}
                                style={{ textAlign: 'left' }}
                                placeholder='Enter your mail ID'
                            />
                        </FormControl>
                    </Stack>
                    <Button variant='contained' style={{ alignSelf: 'center', width: 'fit-content' }}>Submit</Button>
                </Stack>
                <Stack bgcolor={'#ECEEFD'} style={{ height: '--webkit-fill-available', width: '40%' }}>
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
