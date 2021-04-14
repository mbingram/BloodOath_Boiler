import React, { Component } from 'react'
import Collection from './Collection'
import Cult from './Cult'

const baseURL = `http://localhost:6001/cultists`

export default class FollowersPage extends Component {

    state = {
        recruits: [],
        cult: []
    }

    componentDidMount(){
        fetch(baseURL)
            .then(response => response.json())
            .then(recruits => {
                this.setState({ recruits })
            })
    }

    addRecruit = (recruit) => {
        const newRecruit = this.state.cult.find(minion => minion === recruit)
        console.log(recruit)
        if(!newRecruit){
            this.setState({
                cult: [...this.state.cult, recruit]
            })
        }
    }

    render() {
        return (
            <div>
                <Cult cult={this.state.cult} />
                <Collection recruits={this.state.recruits} addRecruit={this.addRecruit} />
            </div>
        )
    }

}

