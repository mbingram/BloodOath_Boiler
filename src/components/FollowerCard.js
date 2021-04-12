import React from 'react'
import standin from '../cultists/ryuku.jpg'

export default function FollowerCard(recruit){
    return (
        <div className="follower-card">
            <img src={standin} alt="cultists"/>
            <h3>{recruit.name}</h3>
            <p>{recruit.cphrase}</p>
        </div>
    )

}


