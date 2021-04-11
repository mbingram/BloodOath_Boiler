import React, { Component } from 'react'
import Collection from './Collection'
import Cult from './Cult'

const baseURL = "http://localhost:6001/cultists"

export default class FollowersPage extends Component {

    state = {
        recruits: [],
        cult: [],
    }

    componentDidMount(){
        fetch(baseURL)
            .then(response => response.json())
            .then(recruits => {
                this.setState({ recruits })
            })
    }

    render() {
        return (
            <div>
                <Cult />
                <Collection recruits={this.state.recruits} />
            </div>
        )
    }

}

