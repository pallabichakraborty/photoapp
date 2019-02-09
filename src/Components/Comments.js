import React from 'react';

const comments = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const commentValue = event.target.elements.comment.value;
        props.addComments(commentValue,props.id);
        event.target.elements.comment.value='';
    }
    const datetime=String(new Date());

    return(
        
        <div className="comment">
         <div>
               {props.comments.map((comment,index)=> {
                   return <p key={index}>{datetime} : {comment}</p>
               })}
            </div>
            <form className="comment-form" onSubmit={handleSubmit} name="myform">             
                <input type="text" placeholder="Comments" text="Add Comments" name="comment"></input>
                <input type="submit" hidden></input>
            </form>
        </div>
    );
}

export default comments;