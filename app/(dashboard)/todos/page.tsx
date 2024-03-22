import db from '@/utils/db'
import TodoList from '@/components/TodoList'
const getData = async () => {
  const todos = db.todo.findMany({})
  console.log(todos)
  return todos
}
const TodosPage = async () => {
  const todos = await getData()
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}
export default TodosPage
