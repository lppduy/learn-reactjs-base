import TodoList from 'features/Todo/components/TodoList';
import { useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import queryString from 'query-string';
function ListPage(props) {
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

  const location = useLocation();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);

    console.log(params);

    return params.status || 'all';
  });

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
  const handleShowAllClick = () => {
    setFilteredStatus('all');
  };
  const handleShowCompletedClick = () => {
    setFilteredStatus('completed');
  };
  const handleShowNewClick = () => {
    setFilteredStatus('new');
  };

  const renderTodolist = todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
  // console.log(renderTodolist);
  return (
    <div>
      <div>
        <h3>Todo List</h3>
        <TodoList todoList={renderTodolist} onTodoClick={handleTodoClick} />
        <div>
          <button onClick={handleShowAllClick}>Show All</button>
          <button onClick={handleShowCompletedClick}>Show Completed</button>
          <button onClick={handleShowNewClick}>Show New</button>
        </div>
      </div>
    </div>
  );
}

ListPage.propTypes = {};

export default ListPage;
