import React from 'react';
import { useState } from 'react';
import Todo from '../components/Todo'

// as a freindly reminder you can also build comps out here to test and move to specific pages, example below.

class TodoList extends React.Component {
  render() {
    return (<ul>
    {
      this.props.todos.map(todo=> {
        return (<Todo todo={todo}/>)
      })
    }
    
  </ul>)
  }
}

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Organize Desk',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Help Madi With BloomTech',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Mow the Lawn',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }
  render() {
    const { todos } = this.state;
    // console.log(todos);
    return (
      <div>
     <TodoList todos={todos}/>
        <form>
          <input/>
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    )
  }
}


