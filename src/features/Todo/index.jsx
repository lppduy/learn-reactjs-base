import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import { useState } from 'react';

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];
  const [todoList, setTodoList] = useState(initTodoList);
  const handleTodoClick = (todo, idx) => {
    // clone current array to the new one
    const newTodoList = [...todoList];
    console.log(todo, idx);
    // toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    }; // newTodoList[idx] = newTodo;

    // update todo list
    setTodoList(newTodoList);
  };

  return (
    <div>
      <div>
        <h3>Todo List</h3>
        <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
      </div>
    </div>
  );
}

TodoFeature.propTypes = {};

export default TodoFeature;
