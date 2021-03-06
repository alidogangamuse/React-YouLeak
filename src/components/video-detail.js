import React, { Component } from 'react';
import CommentList from './comment-list';

class VideoDetail extends Component{

    render(){
        const { video , videodetails , comments} = this.props
        if(!video || !videodetails || !comments) {            
            return (<div>Loading.. <img alt="loader" height="100px" src="./style/images/loader.gif"/></div>);
        }   

        const videoId = video.id.videoId;
        console.log("Gelen id: " + videoId);
        const url = `https://www.youtube.com/embed/${videoId}`;
        console.log("videodetails[0] : ", videodetails)
        return(              
            <div className="col-lg-8">
            <div className="video-detail">
                <div className="embed-responsive embed-responsive-16by9" >
                    <iframe className="embed-responsive-item" allowFullScreen="allowFullScreen" frameBorder="0" src={url}></iframe>
                </div>
                <div className="details">
                    <div className="h3">{videodetails[0].snippet.title}</div>  
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
                            <div>{videodetails[0].snippet.description}</div>     
                        </div>
                    </div>
                </div>
                </div>
                <CommentList comments={comments}/>
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