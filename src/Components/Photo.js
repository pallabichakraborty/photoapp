import React from 'react';
import '../styles/stylesheet.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Photo = (props) =>  {
        const photo= props.photo;
        return (
                <figure className="figure shadow">
                    <Link to={`/single/${photo.id}`}><img className='photo' src={photo.imageLink} alt={photo.description}></img></Link>
                    <figcaption><p className="photo-caption">{photo.description}</p></figcaption>
                    <div className='button-container'>
                    <button className="remove-button mr-2" 
                            onClick={() => {
                                             props.deletePosts(props.index,photo.id)
                                             props.history.push("/")
                                           }
                                    }>Remove</button>
                     <Link className = "button" 
                           to={`/single/${photo.id}`}>
                           <div className="comment-count">
                                    <div className="speech-bubble"></div>
                                   {(props.comments[photo.id]||[]).length}
                           </div>
                     </Link>
                    </div>
                </figure>
        );
}

Photo.propTypes = {
        photo : PropTypes.object.isRequired
}

export default Photo;
