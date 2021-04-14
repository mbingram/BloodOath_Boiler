import React from 'react'
import FollowerCard from '../components/FollowerCard'

export default function Collection({ recruits, addRecruit }) {

    const createCards = () => recruits.map(recruit => {
        return <FollowerCard recruit={recruit} addRecruit={addRecruit} />
    })

    return (
        <div className="collection-container">
            {createCards()}
        </div>
    )
}
