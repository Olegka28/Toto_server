import React from 'react';

// export default class Items extends Component {
//   constructor({ state, changeTodoStatus, deleteTodo }) {
//     super({ state, changeTodoStatus, deleteTodo });
//     this.changeTodoStatus = changeTodoStatus;
//     this.deleteTodo = deleteTodo;
//     // this.completed = completed;

//     this.state = {
//       title: state.title,
//       completed: state.completed,
//       id: state.id,
//     };
//     // console.log(completed);s
//   }

//   componentDidUpdate() {}

//   render() {
//     return (
//       <div>
//         <ul id="myUL">
//           <li
//             onClick={(e) => {
//               // console.log(this.state);

//               this.changeTodoStatus(this.state);
//             }}
//             className={this.state.completed ? 'checked' : ''}>
//             {this.state.title}
//             <span onClick={() => this.deleteTodo(this.state.id)} className="close">
//               ×
//             </span>
//           </li>
//         </ul>
//       </div>
//     );
//   }

function Items({ state, deleteTodo, changeTodoStatus }) {
  return (
    <div>
      <ul id="myUL">
        <li onClick={changeTodoStatus} className={state.completed ? 'checked' : ''}>
          {state.title}
        </li>
        <span onClick={deleteTodo} className="close">
          ×
        </span>
      </ul>
    </div>
  );
}

export default Items;
