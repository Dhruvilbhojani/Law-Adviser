import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Stack, TextField, Typography, MenuItem, Box } from "@mui/material";

function PopupBoxMsg({ open, handleClose }) {
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

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle display={'flex'} alignItems={'center'} justifyContent={'center'} width={500} bgcolor={'#4354EE'} color={'white'} height={100}>
                <Typography variant="h5">
                    Message to lawyer
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Stack spacing={3} padding={5}>
                    <Stack>
                        <TextField id="standard-basic" label="Your Name" variant="standard" />
                    </Stack>
                    <Stack>
                        <TextField id="standard-basic" label="Your Contact Number" variant="standard" />
                    </Stack>
                    <Stack>
                        <TextField id="standard-basic" label="Your Mail ID" variant="standard" />
                    </Stack>
                    <Stack>
                        <TextField multiline rows={4} variant={'outlined'} id="standard-basic" label="Send your message..." />
                    </Stack>
                    
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Button onClick={handleClose} variant="contained" style={{ justifySelf: 'center' }}>Submit</Button>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>
                    </Stack>
                </Stack>
            </DialogContent>
            <DialogActions justifySelf={'space-between'}>
            </DialogActions>
        </Dialog>
    );
}

export default PopupBoxMsg;