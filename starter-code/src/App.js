import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox.js'
import AddFood from './AddFood.js'
import Search from './Search.js'


class App extends Component {
state = {
  food: foods,
  foodCopy: foods,
  showForm: false,
  name: '',
  image: '',
  calories: '',
}



handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

makeFood = (e) =>{
  e.preventDefault()
  console.log(this)
let name = this.state.name
let image = this.state.image
let calories = this.state.calories
let newFood = {name: name, image: image, calories: calories}
let newState = [...this.state.food]
newState.push(newFood)
this.setState({
  food: newState,
  
})
this.showAddFood()
}

showAddFood = () =>{
  let showFormChange = !this.state.showForm
  this.setState({
    showForm: showFormChange
  })
}

search = () => {
  let search = document.querySelector("#search").value.toLowerCase()
  let filterFood = this.state.foodCopy.filter(a => {
   return a.name.toLowerCase().includes(search)
  });
  this.setState({
    food: filterFood
  });
 }



  render(){
    console.log(this.state.food)
    return (
      <div className="App">
      <h1>Iron Nutrition</h1>
      {/* Search */}
      <input 
        onChange={this.search}
        id="search"
        placeholder="Search"
        type="text"
      />
      <br></br>

      {/* Adding food objects */}
      <button onClick={this.showAddFood}>Add Food</button>
      {this.state.showForm && <AddFood saf={this.state.showForm} hc={this.handleChange} mF={this.makeFood} sP={this.state.food}/>}
<br></br>
        {/* Content */}
        <div className="work">
        <FoodBox foodinfo={this.state.food}/>
        <article className="todayFood">
        {/* adding food  */}
          <h1>Today's Foods</h1>
             {}
               </article>
               </div>
      </div>
      
    );
      }
    }

export default App;
