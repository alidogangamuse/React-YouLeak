import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import _ from 'lodash';
import Header from './components/header';
const API_KEY = 'AIzaSyCb7pTQTlxNW_5FTgvI-TMyHDq0ENzN0lI';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null,
     };

     this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term, maxResults: 20}, (videos)=>{
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });   
          sessionStorage.setItem('videoId', videos[0].id.videoId);
    });    
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (    
      <div >
        <Header onSearchTermChange={videoSearch}/>
        <div className="container-fluid mt-3">
          <div className="row">
            <VideoDetail 
              video={this.state.selectedVideo} />
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





