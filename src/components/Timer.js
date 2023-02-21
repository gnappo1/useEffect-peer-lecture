import { useState, useEffect } from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(0)

    // Add your useEffect here and review the setInterval docs
    // Do not forget the cleanup function!

    return (
        <>
            <h5>{timer}</h5>
        </>
    )
}

export default Timer;