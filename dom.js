import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

 
class Hello extends React.Component{
  render () {
   return <h1>Hello, {this.props.name}!</h1>;
  }
}
 
Hello.defaultProps = {
  name: "Jaspuneet Singh",
};
 
ReactDOM.render(<Hello />, document.getElementById('root'));
 
export default Hello;

