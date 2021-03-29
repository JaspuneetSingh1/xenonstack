import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Clock extends React.Component {
  constructor(props) {    
    super(props);    
    this.state = {date: new Date()};  
  
  }
  //lifecycle methods in React.
  //mounting in react for forst time when clock is rendered to the DOM.
  componentDidMount() {
    this.timerID = setInterval(      
      () => this.tick(),
            1000    
            );  
          
          }

            //unmounting in react to free up resources when component is destroyed.
          componentWillUnmount() {
            clearInterval(this.timerID);
          }
        
          tick() {   //this method will keep the clock running. 
            this.setState({      
              
            date: new Date()    
          }
          );  
        
        }


  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>      
        
        </div>
    );
  }
}

ReactDOM.render(
  <Clock />,  document.getElementById('root')
);

export default Clock;
