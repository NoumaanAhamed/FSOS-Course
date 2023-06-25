document.addEventListener("DOMContentLoaded", () => {
  const todoContainer = document.getElementById("todoContainer");
  const todoTitleInput = document.getElementById("todoTitle");
  const todoDescriptionInput = document.getElementById("todoDescription");
  const addTodoBtn = document.getElementById("addTodoBtn");
  const todoList = document.getElementById("todoList");

  function fetchTodos() {
    fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((todos) => {
        // console.log(todos);
        todoList.innerHTML = "";
        todos.forEach((todo) => {
          const li = document.createElement("li");
          li.innerHTML = `
        <h3>${todo.title}</h3>
            <p>${todo.description}</p>
            <button onclick="deleteTodo(${todo.id})">Delete</button>
        `;
          todoList.appendChild(li);
        });
      })
      .catch((err) => console.error("Error fetching todos:", err));
  }

  function addTodo() {
    const title = todoTitleInput.value;
    const description = todoDescriptionInput.value;

    fetch("http://localhost:5000/todos", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        // console.log(data.json());
        todoTitleInput.value = "";
        todoDescriptionInput.value = "";
        fetchTodos(); //!not optimal as GET request , so rewrite the entire function
      })
      //   .then((sm) => console.log(sm)) //! only if json data is required then is used
      .catch((err) => console.error("Error adding todo:", err));
  }

  function deleteTodo(id) {
    fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
    })
      .then(() => fetchTodos()) //! not optimal, implement removeChild
      .catch((error) => console.error("Error deleting todo:", error));
  }

  addTodoBtn.addEventListener("click", addTodo);

  window.deleteTodo = deleteTodo;

  fetchTodos();
});
