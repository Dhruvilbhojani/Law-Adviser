import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function Ans(ans) {
    // console.log(ans.ans);
    const [advocate, setAdvocate] = React.useState({});
    React.useEffect(() => {
        const pid = ans.ans.user;
        const str1 = "https://nervous-cod-sneakers.cyclic.cloud/law-adviser";
        const url = str1.concat("/", pid).toString();
        console.log(url);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAdvocate(data);
            }
            )
            .catch((err) => { });
    }, []);
    return (
        <>
            <Stack direction={'row'} paddingTop={3} spacing={3}>
                <img src='https://avatars.githubusercontent.com/u/98873167?v=4' style={{ borderRadius: '50%', width: '50px', height: '50px' }}></img>
                <Stack>
                    <Stack direction={'row'} spacing={5}>
                        <Typography fontWeight={'bold'}>{advocate.name ? advocate.name : <p></p>}</Typography>
                        <Typography>{advocate.designation ? advocate.designation : <p></p>}</Typography>
                    </Stack>
                    <Typography>{ans.ans.ans}</Typography>
                </Stack>
            </Stack>
        </>
    )
}
