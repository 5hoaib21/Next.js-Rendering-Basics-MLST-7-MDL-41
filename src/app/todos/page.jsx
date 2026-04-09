import React from 'react';

const TodosPage = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await res.json()
  console.log('these are my todo list',todos);
  return (
    <div>
      <h2>This is My ToDo List</h2>
      <h3>ToDos Count: {todos.length}</h3>
    </div>
  );
};

export default TodosPage;