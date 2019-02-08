import React  from 'react';
import Photo from './Photo';
import '../styles/stylesheet.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const Photowall = (props) =>{
        return(
            <div>
                <Link className='addIcon' to="/AddPhoto"></Link>
                <div className='photoGrid'>
                {props.posts
                      .sort((a,b) =>{return b.id - a.id})
                      .map((post,index) => 
                            <Photo key={post.id} 
                                photo={post}
                                {...props}
                                index = {index}></Photo>)}
                </div>
            </div>
            
        );
}

Photowall.propTypes={
    posts:PropTypes.array.isRequired
}

export default Photowall;