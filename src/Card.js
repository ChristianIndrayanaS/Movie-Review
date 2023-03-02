import React from 'react'
import './Card.css'

export default function Card(props) {
    const yearRealase = new Date(props.movieDate)
    return (
        <>
            <div className='card-wrapper'>
                <img className="card-image" src={props.movieImage} alt={props.movieTitle}/>
                <h1 className='card-tittle'>{props.movieTitle}</h1>
                <h1 className='card-realease'>{yearRealase.getFullYear()}</h1>
                <h1 className='card-rating'><i className="fa-solid fa-star"></i>{props.movieRating}</h1>
            </div>
        </>
    )
}
