import React from 'react';
import Items from './component/Items';

// const getData = (fn) => {
//   fetch('http://localhost:8800')
//     .then((res) => res.json())
//     .then((data) => {
//       fn(data);
//     });
// };

let valueInput = '';

function App() {
  const [state, setState] = React.useState([]);

  const input = React.useRef();

  const postData = (value) => {
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

  // console.log(value);
  React.useEffect(() => {
    fetch('http://localhost:8800')
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  }, [state]);
  // getData(setState);

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
      {state && state.map((item, index) => <Items key={index} state={item} />)}
    </div>
  );
}

export default App;
