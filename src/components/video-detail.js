import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTComment from 'youtube-api-comment';
import YTVideo from '../my_modules/youtube-api-videos';
import CommentList from './comment-list';
const API_KEY = 'AIzaSyCb7pTQTlxNW_5FTgvI-TMyHDq0ENzN0lI';


class VideoDetail extends Component{
    constructor(props){
        console.log("1")
        super(props);
        this.state = {
            id : this.props.video.id.videoId,
            comments: [],
            videos: []
        };
        console.log("2")
        this.calis(this.state.id);        
    }   

    calis(id){
        console.log("idimiz : " + id)
        YTComment({ key: API_KEY, videoId:id, maxResults: 50 }, (comments)=>{
            // console.log("Comment: " + comments);
            this.setState({
                comments : comments,                
            });
        });  
        YTVideo({key: API_KEY, videoId:id}, (videos)=>{
            this.setState({
                videos: videos,
            });
        });
    }
    

    render(){
        console.log("detay render calisti....")
        
        if(!this.props.video) {            
            return (<div>Loading.. <img alt="loader" height="100px" src="./style/images/loader.gif"/></div>);
        }   

        const videoId = this.props.video.id.videoId;
        console.log("Gelen id: " + videoId);
        const url = `https://www.youtube.com/embed/${videoId}`;
        
        return(              
            <div className="col-md-8">
            <div className="video-detail">
                <div className="embed-responsive embed-responsive-16by9" >
                    <iframe className="embed-responsive-item" allowFullScreen="allowFullScreen" frameBorder="0" src={url}></iframe>
                </div>
                <div className="details">
                    <div className="h3">{this.props.video.snippet.title}</div>  
                    <div id="profile-area">
                        <div id="profile-area-photo">
                            <div id="profileImage"></div>                     
                        </div>
                        <div id="profile-area-name">
                            <span id="firstName">Ali </span>
                            <span id="lastName">Doğan</span>
                        </div>                    
                    </div>
                    <button className="btn btn-light" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Video Açıklamasını Görüntüle
                    </button> 
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                            <div>{this.state.videos.snippet.description}</div>     
                        </div>
                    </div>
                </div>
                </div>
                <CommentList comments={yorum}/>
            </div>            
        );
    }
}

export default VideoDetail;

/*import React from 'react';
import CommentList from './comment-list';

const VideoDetail = (props) => {

    this.state = {
        comments: [],
        videoDetails: []
    };    
    
    const videoId = props.video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    YTComment({ key: API_KEY, videoId: videoId, maxResults: 50 }, (comments)=>{
        this.setState({comments});
        console.log(comments);
    });

    YTVideo({key: API_KEY, videoId: videoId}, (videoDetails)=>{
        this.setState({videoDetails});
        console.log(videoDetails);
    });

    if(!props.video || !props.sendComments || !props.sendDetails) {
        return (<div>Loading.. <img alt="loader" height="100px" src="./style/images/loader.gif"/></div>);
    } 
   
    return(              
        <div className="col-md-8">
        <div className="video-detail">
            <div className="embed-responsive embed-responsive-16by9" >
                <iframe className="embed-responsive-item" allowFullScreen="allowFullScreen" frameBorder="0" src={url}></iframe>
            </div>
            <div className="details">
                <div className="h3">{props.video.snippet.title}</div>  
                <div id="profile-area">
                    <div id="profile-area-photo">
                        <div id="profileImage"></div>                     
                    </div>
                    <div id="profile-area-name">
                        <span id="firstName">Ali </span>
                        <span id="lastName">Doğan</span>
                    </div>                    
                </div>
                <button className="btn btn-light" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Video Açıklamasını Görüntüle
                </button> 
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        <div>{this.state.videoDetails.snippet.description}</div>     
                    </div>
                </div>
            </div>
            </div>
            <CommentList comments={props.sendComments}/>
        </div>            
    );
    

}

export default VideoDetail;*/