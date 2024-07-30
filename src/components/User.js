import React, { Component } from "react";

class User extends Component {

    constructor(props) {
        super(props)
        // console.log(this.props.name + ' child constructor')
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        // console.log(this.props.name + ' child componentDidMount')
    }

    render() {
        // console.log(this.props.name + ' child render')
        const { fact, length } = this.props
        return (<div className="user-card"><h1>Fact : {fact}</h1><h2>length : {length}</h2></div>)
    }
}

export default User