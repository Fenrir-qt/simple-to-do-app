function myFunction(){
    let taskInput = document.getElementById("task-input");
    let taskValue = taskInput.value;

    if (taskValue.trim() === ""){
        alert('Task cannot be empty!');
        return;
    }

    let taskTd = document.createElement("td");
    taskTd.textContent = taskValue;

    let editTd = document.createElement("td");
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "btn btn-warning btn-sm"

    editBtn.onclick = function(){
        let newTask = prompt("Edit your task: ", taskValue);
        if(newTask !== null && newTask.trim()!==""){
            taskTd.textContent = newTask;
            updateLocalStorage();
        }
    };

    editTd.append(editBtn);

    let deleteTd = document.createElement("td");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-danger btn-sm"

    deleteBtn.onclick = function(){
        tr.remove();
        updateLocalStorage();
    };

    deleteTd.append(deleteBtn);

    let tr = document.createElement("tr");
    tr.append(taskTd, editTd,deleteTd);

    let table = document.querySelector(".todo-table");
    table.append(tr);

    updateLocalStorage();
    taskInput.value="";

};

document.querySelector("#task-input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("addBtn").click();
    }
});

function updateLocalStorage(){

    let tasks = [];
    let rows = document.querySelectorAll(".todo-table tr:not(.list-header)");
    rows.forEach(row =>{
        let taskCell = row.querySelector("td");
        if(taskCell){
            let taskText =taskCell.textContent;
            tasks.push(taskText);
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(taskValue => {
        let taskTd = document.createElement("td");
        taskTd.textContent = taskValue;
    
        let editTd = document.createElement("td");
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "btn btn-warning btn-sm"
    
        editBtn.onclick = function(){
            let newTask = prompt("Edit your task: ", taskValue);
    
            if(newTask !== null && newTask.trim()!==""){
                taskTd.textContent = newTask;
                updateLocalStorage();
            }
        };
    
        editTd.append(editBtn);
    
        let deleteTd = document.createElement("td");
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "btn btn-danger btn-sm"
    
        deleteBtn.onclick = function(){
            tr.remove();
            updateLocalStorage();
        };
    
        deleteTd.append(deleteBtn);
    
        let tr = document.createElement("tr");
        tr.append(taskTd, editTd,deleteTd);
    
        let table = document.querySelector(".todo-table");
        table.append(tr);
    });
}

document.addEventListener("DOMContentLoaded", loadTasks)