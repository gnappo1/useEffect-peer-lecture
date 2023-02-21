import { useState } from 'react'
import Joke from './Joke'

const Jokes = ({jokes=[]}) => {
    const [slideId, setSlideId] = useState(0)
    const mappedJokes = jokes.map(joke => <Joke key={joke.id} {...joke} />)

    return (
        <>
            <button onClick={() => setSlideId(current => current-1 >= 0 ? current-1 : current)} disabled={slideId === 0}>
                <i style={{fontSize:'24px'}} className='fas'>&#xf359;</i>
            </button>
            {mappedJokes[slideId]}
            <button onClick={() => setSlideId(current => current < jokes.length -1 ? current+1 : current)} disabled={slideId === jokes.length -1}>
                <i style={{fontSize:'24px'}} className='fas'>&#xf0a9;</i>
            </button>
        </>
    )
}

export default Jokes