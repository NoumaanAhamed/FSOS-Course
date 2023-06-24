var sendObj = {
  method: "GET",
};

fetch("http://localhost:5000/sum?num=10", sendObj).then(callbackFn);

function callbackFn(result) {
  //   console.log(result.json().then(() => console.log("hello")));
  result.json().then(logResponseBody);
}

function logResponseBody(jsonBody) {
  console.log(jsonBody);
}
