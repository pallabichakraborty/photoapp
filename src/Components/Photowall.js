import React  from 'react';
import Photo from './Photo';
import '../styles/stylesheet.css'

const Photowall = (props) =>{
        return(
            <div className='photoGrid'>
               {props.posts.map((post,index) => <Photo key={index} photo={post}></Photo>)}
            </div>
        );
}

export default Photowall;