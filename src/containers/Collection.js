import React from 'react'
import FollowerCard from '../components/FollowerCard'

export default function Collection({recruits}) {

    const createCards = () => recruits.map((recruit, index) => {
        return <FollowerCard recruit={recruit} key={index} />})

    return (
        <div className="collection-container">
            {createCards()}
        </div>
    )
}
