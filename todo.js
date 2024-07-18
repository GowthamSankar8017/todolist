let butt = document.getElementById("add");
let todolist = document.getElementById("todolist");
let input = document.getElementById("input");

// storing the values in array

let todos = [];
window.onload = ()=>{
    
   todos = JSON.parse(localStorage.getItem("todovalue")) || [];
   todos.forEach(t => addtodo(t));

}


butt.addEventListener("click", () => {
  //pushing the values to array
  todos.push(input.value);
  //local storage
  localStorage.setItem("todovalue", JSON.stringify(todos));

  console.log(todos);
  addtodo(input.value);
  input.value = "";
});

function addtodo(todo) {
  let para = document.createElement("p");
  para.innerText = todo;
  todolist.appendChild(para);



  para.addEventListener("click", () => {
    para.style.textDecoration = "line-through";
    remove(todo);
  });
  para.addEventListener("dblclick", () => {
    todolist.removeChild(para);
    remove(todo);
  });
}

function remove(todo) {
  let index = todos.indexOf(todo);
  if (index > -1) {
    todos.splice(index, 1);

  }
    localStorage.setItem("todovalue", JSON.stringify(todos));
}
