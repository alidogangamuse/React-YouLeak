import React, { Component } from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video, id) => {
        return (
        <VideoListItem 
        key={id} 
        onVideoSelect={props.onVideoSelect}
        video={video} 
        />);
    })

    return(
        <div className="col-lg-4">
            <ul className="list-group">
                <li className="list-group-item active text-center text-uppercase font-weight-bold">
                    Arama Sonuçları
                </li>
                {videoItems}
            </ul>
        </div>
        
    );
}

export default VideoList;
