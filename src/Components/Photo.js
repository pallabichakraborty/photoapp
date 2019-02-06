import React from 'react';
import '../styles/stylesheet.css';
import PropTypes from 'prop-types';

const Photo = (props) =>  {
        const photo= props.photo;
        return (
                <figure className={'figure'}>
                    <img className='photo' src={photo.imageLink} alt={photo.description}></img>
                    <figcaption><p>{photo.description}</p></figcaption>
                    <div className='button-container'>
                    <button className='remove-button' 
                            onClick={() => {props.onRemovePhoto(photo)}}>Remove</button>
                    </div>
                </figure>
        );
}

Photo.propTypes = {
        photo : PropTypes.object.isRequired,
        onRemovePhoto: PropTypes.func.isRequired
}

export default Photo;