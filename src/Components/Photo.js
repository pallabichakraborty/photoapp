import React from 'react';
import '../styles/stylesheet.css'

const Photo = (props) =>  {
        const photo= props.photo;
        return (
                <figure className={'figure'}>
                    <img className='photo' src={photo.imageLink} alt={photo.description}></img>
                    <figcaption><p>{photo.description}</p></figcaption>
                    <div className='button-container'>
                    <button className='remove-button'>Remove</button>
                    </div>
                </figure>
        );
}

export default Photo;