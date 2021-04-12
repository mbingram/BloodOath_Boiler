import React from 'react'

export default function FollowerCard(recruit){
    return (
        <div className="follower-card">
            <img src={recruit.pic}></img>
            <h5>{recruit.name}</h5>
            <p>{recruit.cphrase}</p>
        </div>
    )

}


