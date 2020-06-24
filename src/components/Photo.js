import React from 'react';

export default function PhotoList({date, exp, title, url}) {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{date}</h2>
            <img src={url} alt={title}/>
            <p>{exp}</p>
        </div>
    )
}