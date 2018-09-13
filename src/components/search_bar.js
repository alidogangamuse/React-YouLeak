import React, { Component} from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = { term: ''};
    }

    render(){
        return (            
            <input className="form-control search-bar"
                placeholder="Ara" 
                value={this.state.term}
                // onChange={event => this.setState({term : event.target.value})}
                onChange={event => this.onInputChange(event.target.value)}                
            />
        );
    }

    onInputChange=(term)=>{
        // console.log('SB ' + term);
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    
};

export default SearchBar;