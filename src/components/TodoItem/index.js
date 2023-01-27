// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, uniqueTodo} = props
  const {title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(uniqueTodo)
  }

  return (
    <li className="li-element">
      <p className="todo-title">{title}</p>
      <button className="button" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
