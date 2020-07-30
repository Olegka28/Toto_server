import React, { Component } from 'react';

export default class Items extends Component {
  constructor({ state, changeTodoStatus, deleteTodo }) {
    super({ state, changeTodoStatus, deleteTodo });
    this.changeTodoStatus = changeTodoStatus;
    this.deleteTodo = deleteTodo;

    this.state = {
      title: state.title,
      completed: state.completed,
      id: state.id,
    };
    // console.log(changeTodoStatus);
  }

  render() {
    return (
      <div>
        <ul id="myUL">
          <li
            onClick={() => {
              // console.log(this.state);
              this.changeTodoStatus(this.state);
            }}
            className={this.state.completede ? 'checked' : ''}>
            {this.state.title}
            <span onClick={() => this.deleteTodo(this.state.id)} className="close">
              ×
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

// function Items({ state: { title, completed, id } }) {
//   const [todo, setTodo] = React.useState();

//   const getData = () => {
//     fetch('http://localhost:8800/')
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setTodo(data);
//       });
//   };
//   // console.log(todo);
//   // const postData = (title) => {
//   //   fetch('http://localhost:8800/todos', {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //     body: JSON.stringify({
//   //       title,
//   //       completed: true,
//   //     }),
//   //   })
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setTodo(data);
//   //     });
//   // };
//   // getData();
//   const deleteTodo = (id) => {
//     fetch('http://localhost:8800/todos', {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         id: id,
//       }),
//     });
//     getData();
//   };

//   // const updateTodo = (id, title, completed) => {
//   //   fetch('http://localhost:8800/todos', {
//   //     method: 'PUT',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //     body: JSON.stringify({
//   //       id,
//   //       title,
//   //       completed,
//   //     }),
//   //   })
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setTodo(data);
//   //     });
//   // };

//   return (
//     <div>
//       <ul
//         // onClick={() => {
//         //   postData(title);
//         // }}
//         id="myUL">
//         <li className={completed ? 'checked' : ''}>
//           {title}
//           <span onClick={() => deleteTodo(id)} className="close">
//             ×
//           </span>
//         </li>
//       </ul>
//     </div>
//   );
// }
