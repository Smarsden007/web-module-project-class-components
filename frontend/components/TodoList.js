import React from 'react'
import Todo from '../components/Todo'

export default class TodoList extends React.Component {
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


// class TodoList extends React.Component {
//   render() {
//     return (<ul>
//     {
//       this.props.todos.map(todo=> {
//         return (<Todo todo={todo}/>)
//       })
//     }
    
//   </ul>)
//   }
// }