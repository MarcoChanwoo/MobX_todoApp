import React, { useState } from 'react'
import TodoStore from './TodoStore'

interface TodoListProps {
  todoStore: TodoStore;
}

const TodoList: React.FC<TodoListProps> = ({ todoStore }) => {
  const [value, setValue] = useState<string>('');
  return (
    <div>

    </div>
  )
}

export default TodoList
