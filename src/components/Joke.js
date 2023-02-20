import {useState} from 'react'
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Joke = ({id, safe, type, category, joke=null, setup=null, delivery=null}) => {
    const [front, setFront] = useState(true);
    const [allow, setAllow] = useState(false);

    const jokeTypography = (sentence, fn, style) => <Typography sx={style} color="text.secondary" onClick={() => fn(current => !current)} gutterBottom>{sentence}</Typography>
   
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Question Id: {id}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Category: {category}</Typography>
                {type === 'single' ? <>
                    {allow || safe ? jokeTypography(joke, setAllow, { fontSize: 14 }) : jokeTypography("Content Filtered for Sensitivity! Click to toggle visibility", setAllow, { fontSize: 14, backgroundColor: "#ff3632", color: '#000' })}
                </> : <>
                    {safe ? (
                        front ? jokeTypography(setup, setFront, { fontSize: 14 }) : jokeTypography(delivery, setFront, { fontSize: 14 })
                    ) : (
                        !allow ? jokeTypography("Content Filtered for Sensitivity! Click to toggle visibility", setAllow, { fontSize: 14, backgroundColor: "#ff3632", color: '#000' }) : (front ? jokeTypography(setup, setFront, { fontSize: 14 }) : jokeTypography(delivery, setFront, { fontSize: 14 }))
                    )}
                </>}
            </CardContent>
        </Card>
    )
}

export default Joke