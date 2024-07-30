import { useEffect } from "react"

const Contact = () => {

    useEffect(() => {
        // console.log('useEffect')
        // const timer = setInterval(() => {
        //     console.log('Set interval')
        // }, 1000)

        return () => {
            // clearInterval(timer)
            // console.log('useEffect return')
        }
    }, [])

    console.log('render')
    return (<div><h1>This is contactUs Page!</h1></div>)
}

export default Contact