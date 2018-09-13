import React from 'react';

const VideoListItem = (props) => {
    const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => props.onVideoSelect(video)} className="list-group-item" >
            <div className="video-list media" >
                <div className="media-left" >
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <p className="media-heading">
                    {video.snippet.title}
                    </p>
                </div>
            </div>
        </li>
   
    );

}

export default VideoListItem;