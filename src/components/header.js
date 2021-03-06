import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './search_bar';


class Header extends Component {

    constructor(props){
        super(props);
        this.state = {term : 'ali'};
        //this.passData = this.passData.bind(this);
    }


    passData=(term)=>{
        this.setState({term});
        console.log('header ' + this.state.term);
        this.props.onSearchTermChange(term);
    }
    render(){       
        
        return(

            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow rounded sticky-top">
                <a className="navbar-brand" href="#">
                    <img alt="brand" height="50px" src="./style/images/youtube-fixed.gif"/>
                </a>
                <div className="input-group mx-auto col-6">
                        <SearchBar onSearchTermChange={term => this.passData(term)}/>     
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary btn-sm" type="button" id="button-addon2">
                            <i className="material-icons">search</i>
                            </button>
                        </div>
                </div>
                {/* hamburger menü butonu */}
                <button className="navbar-toggler" name={this.state.term} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse buton-saga-yasla" id="navbarSupportedContent">
                    <button className="btn btn-outline-info btn-md btn-block m-1" type="button">Yükle!</button>
                    <button className="btn btn-outline-success btn-md btn-block m-1" type="button">Profil</button>
                </div>          
            </nav>    
        );
    }
    

}

export default Header;