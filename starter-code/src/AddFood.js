import React, { Component } from 'react'
import foods from './foods.json'
import './App.css';

export default class AddFood extends Component {
 

  render() {
    console.log(this.props.saf)
      return (
          <div>

          <form>
              <label>Food:</label>
              <input type="text" name="name" onChange={this.props.hc}/>
              <input type="text" name="image" onChange={this.props.hc} />
              <input type="text" name="calories" onChange={this.props.hc}/>

              <button  onClick={this.props.mF}>Submit</button>
          </form>
          
        </div>
          
      );
  }
}
