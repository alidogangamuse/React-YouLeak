import React, {Component} from 'react';
import CommentListItem from './comment-list-item';


const CommentList = (props) => {
    const commentItems = props.comments.map((comment, id) => {
        return (
        <CommentListItem 
        key={id} 
        comment={comment} 
        />);
    })

    return(        
        <ul className="list-group mt-4 mb-5" >
            <li className="list-group-item list-group-item-dark text-center text-uppercase font-weight-bold">
                Yorumlar
            </li>
            {commentItems}
        </ul>
    );
}
export default CommentList;