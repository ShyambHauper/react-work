import React, { Component } from "react"
import User from "./User"

class About extends Component {
    constructor(props) {
        super(props)
        // console.log('Parent constructor')

        this.state = {
            apiInfo: {
                fact: 'Dummy',
                length: 0
            }

        }
    }

    async componentDidMount() {
        // console.log('Parent componentdidMount')
        // this.timer = setInterval(() => {
        //     console.log('Set Interval')
        // }, 1000)
        // const data = await fetch('https://catfact.ninja/fact')
        // const json = await data.json()
        // this.setState({
        //     apiInfo: json
        // })
    }

    componentDidUpdate() {
        // console.log('Parent ComponentDidUpdate')
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        // console.log('Parent ComponentDidUnmount')
    }

    render() {
        // console.log('Parent render')
        const { fact, length } = this.state.apiInfo
        return (<div>
            <h1>This is about us page!</h1>
            {/* <User name='first' fact={fact} length={length} /> */}
        </div>)
    }
}

export default About