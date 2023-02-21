import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Timer = () => {
    const [timer, setTimer] = useState(0)

    // useEffect(() => {
    //     const intervalId = setInterval(() => setTimer(current => current + 1), 1000)
    //     console.log("INSIDE THE USEFFECT OF TIMER")
    //     return () => {
    //         console.log("INSIDE THE CLEANUP OF TIMER")
    //         clearInterval(intervalId)
    //     }
    // }, [])

    // useEffect(() => {
    //     const intervalId = setInterval(() => setTimer(timer + 1), 1000)
    //     console.log("INSIDE THE USEFFECT OF TIMER")
    //     console.log("Timer is:" + timer)
    //     return () => {
    //         console.log("INSIDE THE CLEANUP OF TIMER")
    //         clearInterval(intervalId)
    //     }
    // }, [timer])

    return (
        <>
            <h5>{timer}</h5>
        </>
    )
}

export default Timer;