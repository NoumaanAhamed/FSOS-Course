import React, { useState } from "react";
import "./App.css";

function App() {
  const [todoForToday, setTodoForToday] = React.useState({
    title: "Go to gym",
    description: "Hit gym from 7-9",
    id: 1,
  });

  setInterval(() => {
    setTodoForToday({
      title: "Go to gym please please please" + Math.random(),
      description: "Hit gym from 7-9",
      id: 2,
    });
  }, 10000);

  console.log(todoForToday.title);

  return <RenderTodo todoForToday={todoForToday}></RenderTodo>;
}

function RenderTodo(props) {
  console.log(props);
  return (
    <div id="mainArea">
      {props.todoForToday.title}
      <br />
      {props.todoForToday.description}
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
