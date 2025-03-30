function myFunction(){
    let taskInput = document.getElementById("task-input");
    let taskValue = taskInput.value;

    if (taskValue.trim() === ""){
        alert('Task vannot be empty!');
        return;
    }
}