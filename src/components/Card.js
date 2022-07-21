import React from 'react';
import './Card.css';

function Card({ username, name, email }) {
    return (
        <div className="tc bg-light-pink dib pr3 ba3 ma2 grow bw2 shadow-5">
            <img alt='robots' src={`https://robohash.org/${username}?200x200`}></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;