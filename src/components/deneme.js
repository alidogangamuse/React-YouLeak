import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CommentListItem from './comment-list-item';
const API_KEY = 'AIzaSyCb7pTQTlxNW_5FTgvI-TMyHDq0ENzN0lI';


class CommentList extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            data: [],
            comment: props.comments
        }
    }

    fetchComments(id){        
        axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key=${API_KEY}&videoId=${id}`)
          .then(response => response.json())
          .then(data => this.setState({ data }));
    }

    render(){
        if(!this.state.comment) {
            return (<div>Loading.. <img alt="loader" height="100px" src="./style/images/loader.gif"/></div>);
        }
        const videoId = comments.id.videoId;
        this.fetchComments(videoId);   
        
        return(
            <div className="list-group">
                <CommentListItem comment={this.state.data} />          
            </div>
        );
    }
    
    
}
export default CommentList;