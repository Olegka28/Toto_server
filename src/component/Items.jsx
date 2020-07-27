import React from 'react';

function Items({ state: { title, completed, id } }) {
  const [todo, setTodo] = React.useState({});
  const deleteTodo = (id) => {
    fetch('http://localhost:8800/todos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        // title: 'new title from put',
        // completed: true,
      }),
    });
  };

  const updateTodo = (id, tittle, completed) => {
    fetch('http://localhost:8800/todos', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        title,
        completed,
      }),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  React.useEffect(() => {
    setTodo(title);
  }, [todo]);

  return (
    <div>
      <ul id="myUL">
        <li className={completed ? 'checked' : ''}>
          {title}
          <span onClick={() => deleteTodo(id)} className="close">
            ×
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Items;
