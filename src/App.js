import React from 'react';
import Items from './component/Items';

let valueInput = '';

function App() {
  const [state, setState] = React.useState([]);
  const [completede, setCompleted] = React.useState(false);
  const [succsess, setSuccsess] = React.useState(false);
  // console.log(state);
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
        id: id,
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
        completed,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(!data.completed);
        // setState(data);
      });
    // debugger;
  };

  React.useEffect(() => {
    fetch('http://localhost:8800/')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setState(data);
      });
  }, [succsess, completede]);

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
            postData(valueInput);
            input.current.value = '';
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
            deleteTodo={deleteTodo}
            changeTodoStatus={changeTodoStatus}
            completed={completede}
          />
        ))}
    </div>
  );
}

export default App;
