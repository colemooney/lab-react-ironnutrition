import React, { Component } from 'react'
import foods from './foods.json'
import './App.css';

export default class FoodBox extends Component {
  state = {
    quantity: 0,
  }

      foodBox = () =>{
        let content = this.props.foodinfo.map((eachFood, i)=>{
        return(
          <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={eachFood.image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{eachFood.name}</strong> <br />
              <small>{eachFood.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                onChange={(e)=>{this.setState({quantity: e.target.value})}}
                className="input"
                type="number" 
              />
            </div>
            <div className="control">
            <button onClick={()=>this.props.addButton([this.props.name,this.props.cal])} className="button is-info">+</button>

            </div>
          </div>
        </div>
      </article>
    </div>
        )
        })
      return content
      }



    render() {
        return (
            <div className="foodbox">
               {this.foodBox()}
              
            </div>
        )
    }
}
