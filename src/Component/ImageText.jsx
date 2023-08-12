import React from 'react'
import "./Image.css";

function ImageText({ imageUrl, text, para }) {
    return (
        <div className='container'>
            <div className='contain01'>
                <h2>{text}</h2>
                <p>{para}</p>
            </div>
            <div className='contain02'>
                <img src={imageUrl} />
            </div>
        </div>
    )
}

export default ImageText