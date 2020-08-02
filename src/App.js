import React from 'react';
import Items from './component/Items';

let valueInput = '';

function App() {
  const [state, setState] = React.useState([]);
  const [succsess, setSuccsess] = React.useState(false);

  const input = React.useRef();

  const postData = () => {
    fetch('http://localhost:8800/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: valueInput,
        completed: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  };

  const deleteTodo = (id) => {
    fetch('http://localhost:8800/todos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccsess(data);
      });
  };

  const changeTodoStatus = ({ completed, id, title }) => {
    fetch('http://localhost:8800/todos', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        title,
        completed: !completed,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  };

  React.useEffect(() => {
    fetch('http://localhost:8800/')
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  }, [succsess]);

  return (
    <div className="App">
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <input
          ref={input}
          type="text"
          id="myInput"
          placeholder="Title..."
          onChange={(e) => {
            valueInput = e.target.value;
          }}
        />
        <span
          onClick={() => {
            if (valueInput) {
              postData(valueInput);
              input.current.value = '';
              valueInput = '';
            } else {
              alert('Это поле не может быть пустым');
            }
          }}
          className="addBtn">
          Add
        </span>
      </div>
      {state &&
        state.map((item, index) => (
          <Items
            key={index}
            state={item}
            deleteTodo={(e) => {
              if (e.target) {
                deleteTodo(item.id);
              }
            }}
            changeTodoStatus={() => changeTodoStatus(item)}
          />
        ))}
    </div>
  );
}

export default App;
