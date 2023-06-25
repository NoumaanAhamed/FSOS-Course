//! Assignment --> Make a reconciler for updating and deleting without removing from scratch

function createDomElements(data) {
  var parentElement = document.getElementById("mainArea");
  parentElement.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    var childElement = document.createElement("div");

    var grandChildElement1 = document.createElement("span");
    grandChildElement1.innerHTML = data[i].title;

    var grandChildElement2 = document.createElement("span");
    grandChildElement2.innerHTML = data[i].description;

    var grandChildElement3 = document.createElement("button");
    grandChildElement3.innerHTML = "Delete";
    grandChildElement3.setAttribute(
      "onclick",
      "deleteTodo(" + data[i].id + ")"
    );

    childElement.appendChild(grandChildElement1);
    childElement.appendChild(grandChildElement2);
    childElement.appendChild(grandChildElement3);
    parentElement.appendChild(childElement);
  }
}

const todoData = {
  title: "Go to gym",
  description: "Go to gym from 5 PM",
};

window.setInterval(() => {
  createDomElements([todoData]);
}, 1000);

//* Reconciler -> takes care of create,remove and append element

//* Handle states (JS variables) -> components(HTML/CSS)

//* if array new element is pushed -> rerendered in frontend automatically
