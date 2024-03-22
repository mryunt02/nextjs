import NewTodoForm from '@/components/NewTodoForm'

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <h1>dashboard</h1>
      <div>
        <NewTodoForm />
        {children}
      </div>
    </div>
  )
}
export default DashboardLayout
