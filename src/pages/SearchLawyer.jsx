import React from 'react';
import Navbar from '../components/Navbar';
import Advocate from '../components/Advocate';
import {
    Box,
    Grid,
    FormControl,
    Typography,
    InputLabel,
    Select,
    MenuItem,
    Stack,
    Button,
} from '@mui/material';

const CustomFormControl = ({
    labelId,
    id,
    value,
    onChange,
    label,
    options,
}) => (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 200, maxWidth: 200 }}>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select
            labelId={labelId}
            id={id}
            value={value}
            onChange={onChange}
            label={label}
            style={{ textAlign: 'left' }}
        >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {options.map((option, index) => (
                <MenuItem key={index} value={option}>
                    {option}
                </MenuItem>
            ))}
        </Select>
    </FormControl>
);

export default function SearchLawyer() {
    const gender = ["male", "female", "other"]
    const [filter, setFilter] = React.useState({
        selectedCity: '',
        selectedCourt: '',
        selectedCategory: '',
        selectedLanguage: '',
        selectedGender: ''
    });
    const [filteredAdvocates, setFilteredAdvocates] = React.useState([]);
    const [cities, setCities] = React.useState([]);
    const [courts, setCourts] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    const [languages, setLanguages] = React.useState([]);

    React.useEffect(() => {
        fetch("https://mocki.io/v1/402c3e73-1b7e-4311-824e-6de10406a2eb")
            .then((res) => res.json())
            .then((data) => {
                setCities(data.results.map((city) => city.text));
            })
            .catch((err) => { });
        fetch("https://mocki.io/v1/8476affb-1eca-4b8e-aa73-241cce044042")
            .then((res) => res.json())
            .then((data) => {
                setCourts(data.results.map((court) => court.text));
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
        fetch("https://nervous-cod-sneakers.cyclic.cloud/law-adviser")
            .then((res) => res.json())
            .then((data) => {
                setFilteredAdvocates(data);
                // console.log(filteredAdvocates);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const handleFilterChange = (property, value) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            [property]: value,
        }));
        console.log(filter.selectedGender);
    };
    console.log(filter.selectedGender);

    const handleSubmitFilter = () => {
        fetch("https://nervous-cod-sneakers.cyclic.cloud/law-adviser")
            .then((res) => res.json())
            .then((data) => {
                setFilteredAdvocates(data.filter((advo) => {
                    console.log(advo.gender);
                    return (
                        (filter.selectedCity === '' || filter.selectedCity === advo.location) &&
                        (filter.selectedCourt === '' || advo.courts.includes(filter.selectedCourt)) &&
                        (filter.selectedCategory === '' || advo.practiceArea.includes(filter.selectedCategory)) &&
                        (filter.selectedGender === '' || advo.gender.toLowerCase() === filter.selectedGender) &&
                        (filter.selectedLanguage === '' || advo.languages.includes(filter.selectedLanguage))
                    );
                }));
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <>
            <Navbar />
            <Stack direction={'row'} padding={3}>
                <Stack>
                    <Stack
                        direction={'row'}
                        paddingX={1}
                        style={{ alignItems: 'center' }}
                        justifyContent={'space-between'}
                    >
                        <Typography>Filters</Typography>
                        <Button>reset</Button>
                    </Stack>
                    <CustomFormControl
                        labelId="city-label"
                        id="city-select"
                        value={filter.selectedCity}
                        onChange={(e) => handleFilterChange('selectedCity', e.target.value)}
                        label="City"
                        options={cities}
                    />
                    <CustomFormControl
                        labelId="court-label"
                        id="court-select"
                        value={filter.selectedCourt}
                        onChange={(e) => handleFilterChange('selectedCourt', e.target.value)}
                        label="Court"
                        options={courts}
                    />
                    <CustomFormControl
                        labelId="category-label"
                        id="category-select"
                        value={filter.selectedCategory}
                        onChange={(e) =>
                            handleFilterChange('selectedCategory', e.target.value)
                        }
                        label="Category"
                        options={categories}
                    />
                    <CustomFormControl
                        labelId="language-label"
                        id="language-select"
                        value={filter.selectedLanguage}
                        onChange={(e) =>
                            handleFilterChange('selectedLanguage', e.target.value)
                        }
                        label="Language"
                        options={languages}
                    />
                    <CustomFormControl
                        labelId="language-label"
                        id="language-select"
                        value={filter.selectedGender}
                        onChange={(e) =>
                            handleFilterChange('selectedGender', e.target.value)
                        }
                        label="Gender"
                        options={gender}
                    />
                    <Button
                        variant="contained"
                        onClick={handleSubmitFilter}
                        style={{ maxWidth: 'fit-content', alignSelf: 'center' }}
                    >
                        Apply Filters
                    </Button>
                </Stack>
                <Stack padding={5}>
                    <Box style={{ alignSelf: 'center' }}>
                        <Typography variant="h4" fontWeight={'bold'} gutterBottom>
                            Consult Best Lawyers, Attorneys & Legal Advisors in India
                        </Typography>
                    </Box>
                    <Grid paddingY={3} paddingX={1} container spacing={2} justifyContent={'center'}>
                        {
                            filteredAdvocates.map(advocate => {
                                return <Stack width={'100%'} margin={2}>
                                    <Advocate advocateDetails={advocate} />
                                </Stack>

                            })
                        }
                    </Grid>
                </Stack>
            </Stack>
        </>
    );
}
