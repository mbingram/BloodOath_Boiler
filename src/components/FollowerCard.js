import React from 'react'
import standin from '../cultists/ryuku.jpg'

export default function FollowerCard(recruit){
    return (
        <div className="follower-card">
            <img src={standin} alt="cultists"/>
            <h1>{recruit.name}</h1>
            <p>{recruit.cphrase}</p>
        </div>
    )

}


