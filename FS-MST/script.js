var tasks = [];

function addTask() {
    var taskName = document.getElementById("taskName").value;
    var taskPriority = document.getElementById("taskPriority").value;
    
    if (taskName == "") {
        alert("Please enter a task name.");
        return; 
    }

    var newTask = {
        name: taskName,
        priority: taskPriority,
        completed: false 
    };

    tasks.push(newTask);
    document.getElementById("taskName").value = "";
    renderTasks();
}

function deleteTask(indexNumber) {
    tasks.splice(indexNumber, 1);
    renderTasks();
}

function toggleComplete(indexNumber) {
    if (tasks[indexNumber].completed == false) {
        tasks[indexNumber].completed = true;
    } else {
        tasks[indexNumber].completed = false;
    }
    renderTasks();
}

function renderTasks() {
    var listElement = document.getElementById("taskList");
    var filterValue = document.getElementById("filterTasks").value;
    
    listElement.innerHTML = "";

    for (var i = 0; i < tasks.length; i = i + 1) {
        var t = tasks[i];

        if (filterValue == "Completed") {
            if (t.completed == false) {
                continue; 
            }
        }

        var text = t.name + " [Priority: " + t.priority + "]";
        
        if (t.completed == true) {
            text = "<del>" + text + "</del>";
        }

        var checkedState = "";
        if (t.completed == true) {
            checkedState = "checked='checked'";
        }

        var listItemHTML = "<li>";
        listItemHTML = listItemHTML + "<input type='checkbox' onchange='toggleComplete(" + i + ")' " + checkedState + "> ";
        listItemHTML = listItemHTML + "<span>" + text + "</span> ";
        listItemHTML = listItemHTML + "<button onclick='deleteTask(" + i + ")'>Delete</button>";
        listItemHTML = listItemHTML + "</li>";

        listElement.innerHTML = listElement.innerHTML + listItemHTML;
    }
}
