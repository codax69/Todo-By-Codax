const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-cont");

inputBox.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addData(inputBox.value);
    inputBox.value = "";
    saveData();
  }
});

const addData = (item) => {
  if (item == "") {
    alert("Write Something First......!");
  }
  let li = document.createElement("li");
  li.innerHTML = `${item}`;
  li.classList.add("uncompleted");
  listCont.appendChild(li);
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);
  saveData();
};

const addTask = () => {
  if (inputBox.value == "") {
    alert("Write Something First......!");
  } else {
    let LI = document.createElement("li");
    LI.innerHTML = inputBox.value;
    LI.classList.add("uncompleted");
    listCont.appendChild(LI);
    let SPAN = document.createElement("span");
    SPAN.innerHTML = "\u00d7";
    LI.appendChild(SPAN);
    saveData();
  }
  inputBox.value = "";
};

listCont.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    e.target.classList.toggle("completed");
    e.target.classList.toggle("uncompleted");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

const saveData = () => localStorage.setItem("data", listCont.innerHTML);

const showData = () => {
  listCont.innerHTML = localStorage.getItem("data");
};
showData();

const filterOption = document.querySelector(".filter-todos"); //select filter

filterOption.addEventListener("change", filterTodo); //add addEventListener on filter
function filterTodo(e) {
  //run function with e parameter

  const filterValue = e.target.value; // create variable filterValue
  console.log(filterValue);

  const todos = listCont.children; //create variable todos and select list child

  for (let i = 0; i < todos.length; i++) {
    // run for loop
    const todo = todos[i]; //create todo variable and print todos[i]

    if (todo.classList.contains(filterValue)) {
      // use if else statement
      todo.style.display = "block";
    } else if (filterValue == "all") {
      todo.style.display = "block";
    } else {
      todo.style.display = "none";
    }
  }
}
