import React from 'react'
import FollowerCard from '../components/FollowerCard'
import logo from '../cultists/Blood-Oath-soft.png'

export default function Cult() {
    return (
        <div className="cult-container">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo"/>
            </div>
        </div>
    )
}

