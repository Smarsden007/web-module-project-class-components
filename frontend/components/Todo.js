import React from 'react';
// import Todo from '../components/Todo';

class Todo extends React.Component {
  render() {
    return (<li>{this.props.todo.task} { this.props.todo.completed?<span>- completed</span> : <span></span>} </li>)
  }
}
// class Todo extends React.Component {
//   render(){
//    return (<li>{this.props.todo.task} { this.props.todo.completed?<span>- completed</span> : <span></span>} </li>)
//   }; 


export default Todo;