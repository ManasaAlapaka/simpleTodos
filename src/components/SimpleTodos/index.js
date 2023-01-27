import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem/index'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todoList: initialTodosList}

  onDeleteTodo = uniqueTodo => {
    const {todoList} = this.state

    const filTodos = todoList.filter(eachTodo => eachTodo.id !== uniqueTodo)
    this.setState({
      todoList: filTodos,
    })
  }

  render() {
    const {todoList} = this.state

    return (
      <div className="background-con">
        <div className="inner-con">
          <h1 className="main-heading">Simple Todos</h1>
          <ul className="un-order-li-con">
            {todoList.map(eachTodo => (
              <TodoItem
                todoDetails={eachTodo}
                key={eachTodo.id}
                deleteTodo={this.onDeleteTodo}
                uniqueTodo={eachTodo.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
