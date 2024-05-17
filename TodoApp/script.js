const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listContainer");

let span;
let li;

function addTask(){
    if (inputBox.value === ""){
        alert('This field cannot be empty')
    } else{
        li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        span = document.createElement('span');;
        span.innerHTML = "delete";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e){
    if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    } else{
        e.target.classList.toggle('checked');
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function displayTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

displayTask();