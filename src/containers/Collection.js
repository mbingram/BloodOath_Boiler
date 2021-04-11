import React from 'react'
import FollowerCard from '../components/FollowerCard'

export default function Collection({recruits}) {

    const createCards = () => recruits.map((recruit) => {
        return <FollowerCard recruit={recruit} key={Math.random()} />
    })

    return (
        <div className="collection-container">
            {createCards()}
        </div>
    )
}
