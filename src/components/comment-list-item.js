import React from 'react';

const CommentListItem = (props) => {

    const comment = props.comment;
    const commentSnippet= comment.snippet.topLevelComment.snippet;

    const commentText = commentSnippet.textOriginal;
    const updateImageSize = commentSnippet.authorProfileImageUrl;
    const commentImageUrl = updateImageSize.replace("s28", "s100");
    const commentOwnerUrl = commentSnippet.authorChannelUrl;
    const commentOwner = commentSnippet.authorDisplayName
    return (        
        <li className="list-group-item">
            <div className="video-list media" >
                <div className="media-left" >  
                    <a href={commentOwnerUrl} title="Kanalı Görüntüle" >
                        <img className="media-object shadow-lg comment-image-zoom" width="55px" src={commentImageUrl} />
                    </a>                    
                </div>
                <div className="media-heading">
                        <a title="Kanalı Görüntüle" href={commentOwnerUrl}><p className="mb-0"><strong>{commentOwner}</strong></p></a>
                    <blockquote className="blockquote">
                        <footer className="blockquote-footer"><cite>{commentText}</cite></footer>
                    </blockquote>                    
                </div>
            </div>            
        </li>
    );

}
export default CommentListItem;