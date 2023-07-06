import { useState } from "react";
import "./App.css";

function App() {
  const [x, setX] = useState(Math.random());
  const [y, setY] = useState({ id: 1, name: "Noumaan", num: 0.5 });

  setTimeout(() => {
    // console.log(x);
    setY({ id: 2, name: "Nayeem", num: Math.random() });
    // console.log(x);
  }, 5000);

  return (
    <div>
      <p>{x}</p>
      <p>{y.id}</p>
      <p>{y.name}</p>
      <p>{y.num}</p>
    </div>
  );
}

// let todos = [
//   {
//     title: "Gym",
//     description: "Go to gym",
//     id: 1,
//   },
//   {
//     title: "Eat",
//     description: "Go to eat",
//     id: 2,
//   },
// ];

// function App() {
//   const [todo, setTodo] = useState({
//     title: "Gym",
//     description: "Go to gym",
//     id: 1,
//   });

//   setInterval(() => {
//     setTodo({
//       title: "Eat",
//       description: "Go to eat",
//       id: 2,
//     });
//   }, 2000);

//   return (
//     <>
//       <h1>Hello There</h1>
//       <div>{todo.title}</div>
//       <div>{todo.description}</div>
//       <div>{todo.id}</div>
//       <PersonName firstName={todo.title} middleName={"Noumaan"}></PersonName>
//     </>
//   );
// }

// function PersonName(props) {
//   return (
//     <div>
//       {props.firstName} {props.middleName}{" "}
//     </div>
//   );
// }

export default App;
