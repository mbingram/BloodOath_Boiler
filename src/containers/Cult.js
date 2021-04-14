import React from 'react'
import FollowerCard from '../components/FollowerCard'
import logo from '../cultists/Blood-Oath-soft.png'


export default function Cult({ cult, recruit }) {

    const displayCult = () => cult.map(recruit => {
        return <FollowerCard recruit={recruit} />
    })

    return (
        <div className="cult-container">
            <div className="logo-container">
                {displayCult()}
                {/* <img className="logo" src={logo} alt="logo"/> */}
            </div>
        </div>
    )
}

