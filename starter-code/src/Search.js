import React, { Component } from 'react'


export default class Search extends Component {


    
  
    render() {
        
        return (
            
    <div className="searchForm">
       
            <input  type="text" name="search" placeholder="search"></input>
            {this.props.searchprop}
    </div>
            
        )
    }
}
