const inputBox = document.getElementById('input-box');
const listCont = document.getElementById('list-cont');
const filterOption = document.querySelector('.filter-todos');

inputBox.addEventListener('keyup', (e) => {
    if (e.key === "Enter" && inputBox.value !== "") {
        addTask(inputBox.value);
        inputBox.value = "";
    }
});

const addTask = (item) => {
    let li = document.createElement('li');
    li.innerHTML = `${item}`;
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    listCont.appendChild(li);
    saveData();
}

listCont.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
    saveData();
});

const saveData = () => {
    localStorage.setItem('data', listCont.innerHTML);
}

const showData = () => {
    listCont.innerHTML = localStorage.getItem('data');
}

showData();

filterOption.addEventListener('change', filterTodo);

function filterTodo(e) {
    const filterValue = e.target.value;
    const todos = Array.from(listCont.children);

    todos.forEach(todo => {
        if (todo.classList.contains(filterValue) || filterValue == 'all') {
            todo.style.display = 'flex';
        } else {
            todo.style.display = 'none';
        }
    });
}
