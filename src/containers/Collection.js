import React from 'react'
import FollowerCard from '../components/FollowerCard'

export default function Collection({recruits}) {

    const createCards = () => {
        return recruits.map(recruit => <FollowerCard name={recruit.name} pic={recruit.pic} cphrase={recruit.catchphrase} />)}
    

    return (
        <div className="collection-container">
            {createCards()}
        </div>
    )
}
