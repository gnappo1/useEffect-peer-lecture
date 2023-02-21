import Container from '@mui/material/Container';
import Jokes from './Jokes';

const JokesContainer = () => {
    const API = "https://v2.jokeapi.dev/joke/Miscellaneous,Pun,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10"
    // set a state variable to keep track of the jokes

    const fetchData = () => {
        fetch(API)
        .then(res => res.json())
        .then(data => console.log(data.jokes))
        .catch(error => alert(error))
    }

    const fetchDataAsync = async () => {
        try {
            const resp = await fetch(API)
            const data = await resp.json()
            console.log(data.jokes)
        } catch (error) {
            alert(error)
        }
    }
    
    return (
        <Container maxWidth="lg" sx={{display: "-webkit-flex", justifyContent: "center", marginTop: "5rem"}}>
            <Jokes />
        </Container>
    )
}

export default JokesContainer