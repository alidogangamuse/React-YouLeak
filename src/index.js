import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import YTComment from 'youtube-api-comment'
import YTVideo from './my_modules/youtube-api-videos'
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import _ from 'lodash';
import Header from './components/header';
const API_KEY = 'AIzaSyCb7pTQTlxNW_5FTgvI-TMyHDq0ENzN0lI';

class App extends Component {
  constructor(props){
    super(props);

     console.log("constructor calisti....")
     this.state = { 
      videos: [],
      selectedVideo: null,
      comments : null,
      videodetails: null
     };
     this.videoSearch('surfboards');
  }
  


 fetchVideoDetail = (id)=>{
   console.log("fetchVideoDetail : " , id)
    YTVideo({key: API_KEY, videoId:id}, (videodetails)=>{
      console.log("fetchVideoDetail : " , videodetails)
      this.setState({ videodetails : videodetails });
      console.log("fetchVideoDetail : " , videodetails)
    }); 
 }
 fetchComment = (id) =>{
   console.log("fetchComment : ", id)
    YTComment({ key: API_KEY, videoId:id, maxResults: 50 }, (comments)=>{
   console.log("fetchComment : ", comments)

      this.setState({ comments : comments });

    console.log("state fetchComment : ", this.state.comments)

    }); 
 }
 
  videoSearch(term){
    console.log("videoSearch çalıştı")
    YTSearch({key: API_KEY, term: term, maxResults: 20}, (videos)=>{
      this.fetchComment(videos[0].id.videoId)
      this.fetchVideoDetail(videos[0].id.videoId)
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      }); 
    });
  } 

  render(){
    console.log("render calisti....")

    if(!this.state.videodetails || !this.state.comments){
      return (<div>Loading.. <img alt="loader" height="100px" src="./style/images/loader.gif"/></div>);
    }
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (    
      <div >
        <Header onSearchTermChange={videoSearch}/>
        <div className="container-fluid mt-3">
          <div className="row">
            <VideoDetail 
              video={this.state.selectedVideo}
              videodetails={this.state.videodetails}
              comments={this.state.comments} />
            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos} /> 
          </div>             
        </div>     
      </div>
    );
  }   
}

ReactDOM.render(<App />, document.querySelector('#container'));

export default App;