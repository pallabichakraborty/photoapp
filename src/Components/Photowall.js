import React  from 'react';
import Photo from './Photo';
import '../styles/stylesheet.css';
import PropTypes from 'prop-types';

const Photowall = (props) =>{
        return(
            <div className='photoGrid'>
               {props.posts.map((post,index) => 
                        <Photo key={index} 
                               photo={post}
                               onRemovePhoto={props.onRemovePhoto}></Photo>)}
            </div>
        );
}

Photowall.propTypes={
    posts:PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photowall;