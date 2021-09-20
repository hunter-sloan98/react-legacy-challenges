import React from 'react';
// import { render } from 'react-dom';
import { Input } from 'reactstrap';

export default class SearchIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      things: [
        'pen', 
        'marker', 
        'eraser', 
        'notebook', 
        'pencil', 
        'scissors', 
        'highlighter', 
        'stapler', 
        'paper clip', 
        'binder', 
        'hole punch', 
        'laminator', 
        'laminating sheets', 
        'protective sheets', 
        'index cards'],
      value: '',
      empty: '',
      result: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.searchFunction = this.searchFunction.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

    searchFunction = () => {
      if(this.state.value !== ''){
        let search = this.state.value
        let searchResult = this.state.things.filter(function(value) {
          return value === search
        })
        this.setState({result: searchResult})
      } else if (this.state.value === ''){
        this.setState({empty: this.state.things.join(', ')})
      } else{
        console.log("bungus")
      }
      console.log(this.state.result)
  }

render(){
  return (
    <div>
      <h3>Results:</h3>
      <Input type='text' value={this.state.value} onChange={this.handleChange} placeholder='Search Here'  />
      <button onClick={this.searchFunction}>Search</button>
      <h1>{this.state.result[0]}</h1>
      <h2>{this.state.empty}</h2>
    </div>
    )
  }
}










