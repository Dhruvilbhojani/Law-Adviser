import React from 'react'
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Stack, TextField, Typography, MenuItem, Box, FormControlLabel, Checkbox, AppBar } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from 'react-router-dom';


export default function ProfileDetails({ profile, setProfile, handleProfileChange, open, handleClose }) {
    const navigate = useNavigate();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleNext = () => {
        setValue((preValue) => preValue + 1);
    };

    const handleSubmit = () => {
        const finalProfile = {
            "password": profile.password,
            "profileIcon": profile.profileIcon,
            "name": profile.fname + " " + profile.lname,
            "designation": profile.designation,
            "location": profile.location,
            "workingFrom": new Date(profile.workingFrom).toISOString(),
            "userRating": 0.0,
            "verified": false,
            "hallOfFrames": [],
            "badges": [],
            "languages": profile.languages,
            "practiceArea": profile.practiceArea,
            "description": profile.description,
            "contactNumber": parseInt(profile.contactNumber),
            "emailId": profile.emailId,
            "enrollmentNumber": profile.enrollmentNumber,
            "gender": profile.gender,
            "ratedBy": 0,
            "publicQuestionReply": [],
            "courts": profile.courts,
            "blogs": [],
            "articles": [],
            "videos": [],
            "reviews": []
        }
        console.log("Final Profile");
        console.log(finalProfile);
        fetch('https://nervous-cod-sneakers.cyclic.cloud/law-adviser/registeradvocate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify(finalProfile)
        }).then(res => res.json()).then(data => {
            console.log(data);
            navigate('/')
        })
    }
    // const [profile, setProfile] = React.useState({
    //     "password": "",
    //     "profileIcon": "",
    //     "fname": "",
    //     "lname": "",
    //     "designation": "",
    //     "location": "",
    //     "workingFrom": "",
    //     "userRating": 0.0,
    //     "verified": false,
    //     "hallOfFrames": [],
    //     "badges": [],
    //     "languages": [],
    //     "practiceArea": [],
    //     "description": "",
    //     "contactNumber": 0,
    //     "emailId": "",
    //     "enrollmentNumber": "",
    //     "gender": "",
    //     "ratedBy": 0,
    //     "publicQuestionReply": [],
    //     "courts": [],
    //     "blogs": [],
    //     "articles": [],
    //     "videos": [],
    //     "reviews": []
    // }
    // );


    const [selectedItems, setSelectedItems] = React.useState([]);

    const handleSChange = (event) => {
        setSelectedItems(event.target.value);
        setProfile({
            ...profile,
            ["practiceArea"]: [...selectedItems],
        });
    };
    const [selectedCourts, setSelectedCourts] = React.useState([]);

    const handleCourtChange = (event) => {
        setSelectedCourts(event.target.value);
        setProfile({
            ...profile,
            ["courts"]: [...selectedCourts],
        });
    };
    const [selectedLanguages, setSelectedLanguages] = React.useState([]);

    const handleLanguageChange = (event) => {
        setSelectedLanguages(event.target.value);
        setProfile({
            ...profile,
            ["languages"]: [...selectedLanguages],
        });
    };

    const [cities, setCities] = React.useState([]);
    const [states, setStates] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    const [courts, setCourts] = React.useState([]);
    const [languages, setLanguages] = React.useState([]);

    React.useEffect(() => {
        fetch("https://mocki.io/v1/8476affb-1eca-4b8e-aa73-241cce044042")
            .then((res) => res.json())
            .then((data) => {
                setCourts(data.results.map((court) => court.text));
            })
            .catch((err) => { });
        fetch("https://mocki.io/v1/402c3e73-1b7e-4311-824e-6de10406a2eb")
            .then((res) => res.json())
            .then((data) => {
                setCities(data.results.map((city) => city.text));
            })
            .catch((err) => { });
        fetch("https://mocki.io/v1/a3668949-c14c-4332-98f0-105abad670b8")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setStates(data);
            })
            .catch((err) => { });
        fetch("https://mocki.io/v1/36649834-713d-4a9b-add5-53ae5c26800c")
            .then((res) => res.json())
            .then((data) => {
                setCategories(data.results.map((category) => category.text));
            })
            .catch((err) => { });
        fetch("https://mocki.io/v1/61fb1e1d-1873-4e1e-bfd2-35dd7b78bb53")
            .then((res) => res.json())
            .then((data) => {
                setLanguages(data.results.map((language) => language.text));
            })
            .catch((err) => { });
    }, []);

    return (
        <Dialog open={open} onClose={handleClose} style={{ overflow: 'hidden' }}>
            <DialogTitle display={'flex'} alignItems={'center'} justifyContent={'center'} width={'100%'} bgcolor={'#4354EE'} color={'white'} height={40}>
                <Typography variant="h5">
                    Registration
                </Typography>
            </DialogTitle>
            <DialogContent width={'50%'} style={{ overflowX: 'hidden' }}>
                <Tabs value={value} onChange={handleChange} aria-label="Tabs example" style={{ width: '900px', overflow: 'hidden' }}>
                    <Tab label="Step 1" />
                    <Tab label="Step 2" />
                    <Tab label="Step 3" />
                    <Tab label="Step 4" />
                </Tabs>
                <TabPanel height={'100vh'} value={value} index={0} style={{ overflow: 'hidden' }}>
                    <Typography variant="h5" alignSelf={'center'} color={'#4A154B'}>
                        Basic Details
                    </Typography>
                    <Stack spacing={3} marginY={3} justifyContent={'center'} alignItems={'center'}>
                        <Stack direction={'row'} borderRadius={3} margin={2} width={'100%'}>
                            <Stack spacing={2} width={'100%'} alignItems={'center'}>
                                <Stack width={'90%'}>
                                    <Typography width={'90%'} textAlign={'left'} variant={'caption'}>Create account as</Typography>
                                    <Stack direction={'row'} justifyContent={'space-between'} width={'100%'}>
                                        <Button variant='outlined' style={{ color: 'black', borderColor: 'black' }} size='small' >Advocate</Button>
                                        <Button variant='outlined' style={{ color: 'black', borderColor: 'black' }} size='small'>Arbitrator</Button>
                                        <Button variant='outlined' style={{ color: 'black', borderColor: 'black' }} size='small'>Notary</Button>
                                        <Button variant='outlined' style={{ color: 'black', borderColor: 'black' }} size='small'>Client</Button>
                                    </Stack>
                                </Stack>
                                <Stack direction={'row'} width={'90%'} spacing={2}>
                                    <TextField style={{ width: '48%' }} id="outlined-basic" name='fname' label="First Name" variant="outlined" value={profile.fname} onChange={handleProfileChange} />
                                    <TextField style={{ width: '48%' }} id="outlined-basic" name='lname' label="Last Name" variant="outlined" value={profile.lname} onChange={handleProfileChange} />
                                </Stack>
                                <TextField style={{ width: '90%' }} id="outlined-basic" name='enrollmentNumber' label="Enrollment Number" variant="outlined" value={profile.enrollmentNumber} onChange={handleProfileChange} />
                                <TextField style={{ width: '90%' }} id="outlined-basic" name='emailId' label="Email ID" variant="outlined" value={profile.emailId} onChange={handleProfileChange} />
                                <TextField style={{ width: '90%' }} id="outlined-basic" name='contactNumber' label="Mobile Number" variant="outlined" value={profile.contactNumber} onChange={handleProfileChange} />
                                <Stack direction={'row'} width={'90%'} spacing={2}>
                                    <TextField type="date" InputLabelProps={{
                                        shrink: true,
                                    }} style={{ width: '48%' }} id="outlined-basic" label="Date of Birth" variant="outlined" /> {/*Not Included*/}
                                    <TextField
                                        select
                                        style={{ width: '48%' }}
                                        id="outlined-basic"
                                        label="Gender"
                                        variant="outlined"
                                        name='gender'
                                        value={profile.gender}
                                        onChange={handleProfileChange}
                                    >
                                        <MenuItem value={'male'}>Male</MenuItem>
                                        <MenuItem value={'female'}>Female</MenuItem>
                                        <MenuItem value={'other'}>Other</MenuItem>
                                    </TextField>
                                </Stack>
                                <Stack direction={'row'} width={'90%'} spacing={2}>
                                    <TextField select style={{ width: '48%' }} name='location' id="outlined-basic" label="City" variant="outlined" value={profile.city} onChange={handleProfileChange}>
                                        {cities.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField select style={{ width: '48%' }} id="outlined-basic" label="State" variant="outlined" >
                                        {states.map((option) => (
                                            <MenuItem key={option.name} value={option.name}>
                                                {option.name}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Button variant='contained' onClick={handleNext}>Next</Button>
                    </Stack>
                </TabPanel>
                <TabPanel height={'100vh'} value={value} index={1}>
                    <Typography variant="h5" alignSelf={'center'} color={'#4A154B'}>
                        Professional Details
                    </Typography>
                    <Stack spacing={3} marginY={3} justifyContent={'center'} alignItems={'center'}>
                        <Stack direction={'row'} borderRadius={3} margin={2} width={'100%'}>
                            <Stack spacing={2} width={'100%'} alignItems={'center'}>
                                <Stack direction={'row'} width={'90%'} spacing={2}>
                                    <TextField style={{ width: '48%' }} id="outlined-basic" label="Bar Association Registration Number" variant="outlined" /> {/**Not Included */}

                                    {/*********************** */}
                                    <TextField
                                        select
                                        label="Jurisdiction of Practice"
                                        variant="outlined"
                                        style={{ width: '48%' }}
                                        SelectProps={{
                                            multiple: true,
                                            value: selectedItems,
                                            renderValue: (selected) => selected.join(", "),
                                            onChange: handleSChange, // Add this onChange handler
                                        }}
                                    >
                                        {categories.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Stack>
                                <Stack direction={'row'} width={'90%'} spacing={2}>
                                    <TextField select SelectProps={{
                                        multiple: true,
                                        value: selectedCourts,
                                        renderValue: (selected) => selected.join(", "),
                                        onChange: handleCourtChange, // Add this onChange handler
                                    }} style={{ width: '48%' }} id="outlined-basic" label="Practicing Court" variant="outlined" >
                                        {courts.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField type='date' InputLabelProps={{ shrink: true }} style={{ width: '48%' }} id="outlined-basic" label="Working from" variant="outlined" name='workingFrom' value={profile.workingFrom} onChange={handleProfileChange} />
                                </Stack>
                                <Stack direction={'row'} width={'90%'} spacing={2}>
                                    <TextField select SelectProps={{
                                        multiple: true,
                                        value: selectedLanguages,
                                        renderValue: (selected) => selected.join(", "),
                                        onChange: handleLanguageChange, // Add this onChange handler
                                    }} style={{ width: '48%' }} id="outlined-basic" label="Languages" variant="outlined" >
                                        {languages.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField select style={{ width: '48%' }} id="outlined-basic" name='designation' label="Designation" variant="outlined" value={profile.designation} onChange={handleProfileChange} >
                                        <MenuItem value="Advocate">Advocate
                                        </MenuItem>
                                        <MenuItem value="Justice">Justice
                                        </MenuItem>
                                    </TextField>
                                </Stack>
                                <TextField style={{ width: '91%' }} id="outlined-basic" name='description' multiline rows={4} label="Description" variant="outlined" value={profile.description} onChange={handleProfileChange} >
                                </TextField>
                            </Stack>
                        </Stack>
                        <Button variant='contained' onClick={handleNext}>Next</Button>
                    </Stack>



                </TabPanel>

                <TabPanel height={'100vh'} value={value} index={2}>
                    <Typography variant="h5" alignSelf={'center'} color={'#4A154B'}>
                        Upload Documents
                    </Typography>
                    <Stack spacing={3} marginY={3} justifyContent={'center'} alignItems={'center'}>
                        <Stack direction={'row'} borderRadius={3} margin={2} width={'100%'}>
                            <Stack spacing={2} width={'100%'} alignItems={'center'}>
                                <Stack direction={'row'} width={'90%'} spacing={2}>
                                    <TextField type={'file'} InputLabelProps={{ shrink: true }} style={{ width: '48%' }} id="outlined-basic" label="Bar Association Certificate" variant="outlined" />
                                    <TextField type={'file'} InputLabelProps={{ shrink: true }} style={{ width: '48%' }} id="outlined-basic" label="Legal License or Certification" variant="outlined" />
                                </Stack>
                                <Stack direction={'row'} width={'90%'} spacing={2}>
                                    <TextField type={'file'} InputLabelProps={{ shrink: true }} style={{ width: '48%' }} id="outlined-basic" label="Photo ID (for identity verification)" variant="outlined" />
                                    <TextField style={{ width: '48%' }} id="outlined-basic" label="Upload your Profile Image (Link)" variant="outlined" name="profileIcon" value={profile.profileIcon} onChange={handleProfileChange} />
                                </Stack>
                            </Stack>
                        </Stack>
                        <Button variant='contained' onClick={handleNext}>Next</Button>
                    </Stack>
                </TabPanel>
                <TabPanel height={'100vh'} width={'100%'} value={value} index={3}>
                    <Typography variant="h5" alignSelf={'center'} color={'#4A154B'}>
                        Verification
                    </Typography>
                    <Stack spacing={3} marginY={3} justifyContent={'center'} alignItems={'center'}>
                        <Stack direction={'row'} borderRadius={3} margin={2} width={'100%'}>
                            <Stack spacing={2} width={'100%'} alignItems={'center'}>
                                <Stack direction={'row'} width={'90%'} spacing={2}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={false}
                                                onChange={() => { }}
                                                name="yourCheckbox"
                                                color="primary" // Change the color to your desired color (e.g., "primary" or "secondary")
                                            />
                                        }
                                        label="Check for consent to store and process personal information."
                                    />
                                </Stack>
                                <Stack direction={'row'} width={'90%'} spacing={2}>
                                    <TextField type={'file'} InputLabelProps={{ shrink: true }} id="outlined-basic" label="Upload your Signature" variant="outlined" />
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack direction={'row'} width={'100%'} justifyContent={'space-between'}>
                            <Button variant="contained" style={{ justifySelf: 'center' }} onClick={handleSubmit}>Submit</Button>
                            <Button variant="outlined" onClick={handleClose} color="primary">
                                Close
                            </Button>
                        </Stack>
                    </Stack>
                </TabPanel>

            </DialogContent>
            <DialogActions justifySelf={'space-between'}>
            </DialogActions>
        </Dialog>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}
