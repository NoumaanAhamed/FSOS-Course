const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 5000;

//*Browser/Postman/Nodejs Process( Different ) <--- HTTP Req ---> HTTP Server
//*via URL/Routes/Headers

let numOfReqs = 0;
let users = [
  { id: 1, name: "Noumaan" },
  { id: 2, name: "Nayeem" },
  { id: 3, name: "Shoaib" },
];

//req --> Body,Headers,Query,Params
//res --> Body(HTML,JSON,Raw Text),Headers,Status Code

// function middleware1(req, res, next) {
//   numOfReqs += 1;
//   console.log(numOfReqs);
//   console.log("From inside middleware" + req.headers.num);

//   if (1) {
//     next();
//   } else {
//     res.send("Error");
//   }
// }

// app.use(middleware1); //called before any request is called
// app.use(express.json()); //uses req.body
app.use(bodyParser.json()); //above is deprecated
function handleFirstRequest(req, res) {
  res.send("Hello World!");
}

function handleSum(req, res) {
  // let num = req.query.num;
  // let num = req.headers.num;
  let num = req.query.num;

  let answerObj = {
    sum: SumToN(num),
  };

  if (num < 100000) {
    // res.send(`Sum till ${num} is ${SumToN(num)}`);
    res.send(answerObj);
    // res.json(answerObj);//send only json
  } else {
    res.status(411).send("You have sent a very big number");
  }
}

// function handleAdd(req, res) {
//   let counter1 = req.query.counter1;
//   let counter2 = req.query.counter2;

//   res.send(
//     `Sum till ${counter1} is ${SumToN(
//       counter1
//     )} and Sum till ${counter2} is ${SumToN(counter2)}`
//   );
// }

// function getUser(req, res) {
//   const reqId = parseInt(req.params.id);

//   const user = users.find((user) => {
//     return user.id === parseInt(reqId);
//   });

//   if (!user) {
//     return res.status(404).send("User not found");
//   }

//   res.status(200).send(user);
// }

// function createUser(req, res) {
//   const reqId = parseInt(req.params.id);
//   const name = req.body.name;

//   const newUser = { id: reqId, name };

//   users.push(newUser);

//   res.status(200).send("User Created");
// }

// function updateUser(req, res) {
//   const reqId = parseInt(req.params.id);
//   const newName = req.body.name;

//   const currentUser = users.find((user) => {
//     return user.id === parseInt(reqId);
//   });

//   if (!currentUser) {
//     return res.status(404).send("User not found");
//   }

//   currentUser.name = newName;

//   res.status(200).send("User Updated");
// }

// function deleteUser(req, res) {
//   const reqId = parseInt(req.params.id);

//   const userIndex = users.findIndex((user) => {
//     return user.id === parseInt(reqId);
//   });
//   if (userIndex === -1) {
//     return res.status(404).send("User not found");
//   }

//   const deletedUser = users.splice(userIndex, 1)[0];

//   res.status(200).send("User Deleted");
// }

// function getAllUsers(req, res) {
//   res.send(users);
// }

// // function returnhtml(req, res) {
// //   res.send(`<head>
// //   <title>
// //       Hello from page
// //   </title>
// // </head>
// // <body>
// //   <i>Hi there</i>
// // </body>`);
// // }

// function sendFiles(req, res) {
//   res.sendFile(__dirname + "/index.html");
// }

// app.get("/", sendFiles);

app.get("/sum", handleSum);

// app.get("/add", handleAdd);

// app
//   .route("/users/:id")
//   .get(getUser)
//   .post(createUser)
//   .put(updateUser)
//   .delete(deleteUser);

// app.get("/allusers", getAllUsers);

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

//! try to send the code in browser or frontend
