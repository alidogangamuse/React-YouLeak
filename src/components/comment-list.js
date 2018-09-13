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
        <ul className="list-group mt-4">
            <li className="list-group-item list-group-item-dark">
                <div className="h4" >Yorumlar</div>
            </li>
            {commentItems}
        </ul>
    );
}
export default CommentList;