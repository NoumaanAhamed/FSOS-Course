const express = require("express");

const app = express();

const port = 5000;

let users = [
  { id: 1, name: "Noumaan" },
  { id: 2, name: "Nayeem" },
  { id: 3, name: "Shoaib" },
];

app.use(express.json());

function handleFirstRequest(req, res) {
  res.send("Hello World!");
}

function handleSum(req, res) {
  let num = req.params.id;
  res.send(`Sum till ${num} is ${SumToN(num)}`);
}

function handleAdd(req, res) {
  let counter1 = req.query.counter1;
  let counter2 = req.query.counter2;

  res.send(
    `Sum till ${counter1} is ${SumToN(
      counter1
    )} and Sum till ${counter2} is ${SumToN(counter2)}`
  );
}

function getUser(req, res) {
  const reqId = parseInt(req.params.id);

  const user = users.find((user) => {
    return user.id === parseInt(reqId);
  });

  if (!user) {
    return res.status(404).send("User not found");
  }

  res.status(200).send(user);
}

function createUser(req, res) {
  const reqId = parseInt(req.params.id);
  const name = req.body.name;

  const newUser = { id: reqId, name };

  users.push(newUser);

  res.status(200).send("User Created");
}

function updateUser(req, res) {
  const reqId = parseInt(req.params.id);
  const newName = req.body.name;

  const currentUser = users.find((user) => {
    return user.id === parseInt(reqId);
  });

  if (!currentUser) {
    return res.status(404).send("User not found");
  }

  currentUser.name = newName;

  res.status(200).send("User Updated");
}

function deleteUser(req, res) {
  const reqId = parseInt(req.params.id);

  const userIndex = users.findIndex((user) => {
    return user.id === parseInt(reqId);
  });
  if (userIndex === -1) {
    return res.status(404).send("User not found");
  }

  const deletedUser = users.splice(userIndex, 1)[0];

  res.status(200).send("User Deleted");
}

function getAllUsers(req, res) {
  res.send(users);
}

app.get("/", handleFirstRequest);

app.get("/sum/:id", handleSum);

app.get("/add", handleAdd);

app
  .route("/users/:id")
  .get(getUser)
  .post(createUser)
  .put(updateUser)
  .delete(deleteUser);

app.get("/allusers", getAllUsers);

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);

function SumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
