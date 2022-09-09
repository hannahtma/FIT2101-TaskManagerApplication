
const TASK_KEY = "allTasksData";
const allTasks = [];

class Task {
    constructor(taskList = []) {
        this._taskList = taskList;
        }
    //-------ACCESSORS---------------
    get taskList() {return this._taskList};
    //-------MUTATORS-----------------
    set taskList(newTaskList) {this._taskList = newTaskList};
    //-------METHOD---------------
    fromData(data) {
        this._taskList = data._taskList;
    }
}

function addTaskCard() {
    // TODO: Task 4
    //Collecting Data from ID's
    let newTitle = document.getElementById("task-title").value;
    let newDesc = document.getElementById("task-desc").value;

    // Try again if empty input
    while (newTitle == "" || newDesc == "") {
        alert("That input is invalid");
        if (newTitle == null || newTitle == "") {
            newTitle = prompt("Name of Title?");
        } else if (newDesc == null || newDesc == "") {
            newDesc = prompt("Description?");
        }
    }

    console.log(allTasks);
    let someTask = {"taskName": newTitle, "taskDesc": newDesc};
    allTasks.push(someTask);
    data = new Task(allTasks);
    let json = JSON.stringify(data);
    localStorage.setItem(TASK_KEY, json);

    //Updating the display table/inventory with the user entered data
    // update LS
    // updateLSData(WAREHOUSE_KEY, inventory);
    // update display
    displayCard(newTitle, newDesc);
    $("#exampleModal").modal("hide");
    $("#exampleModal").on("hidden.bs.modal", function (e) {
        $("#exampleModal").find("input[type=text], textarea").val("");
    });

}

function displayCard(title, desc) {
    // TODO: Task 3
    let displayRef = document.getElementById("my-container");
    let displayData = "";
    // This is used to display the entered data and add an edit button next to it
    displayData += `<div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text" id="studentEnrolSummary">${desc}</p>
                    <a href="#show-task-container" class="card-link stretched-link">Card link</a>
                </div>
                </div>`;

    return (displayRef.innerHTML = displayData);
}

function edit(taskName, taskDesc) {
    // store data in LS
    localStorage.setItem(TASK_NAME_KEY, taskName);
    localStorage.setItem(TASK_DESC_KEY, taskDesc);
    // redirect to edit page
    window.location = "#show-task-container";
}

/**
 * checkLSData function
 * Used to check if any data in LS exists at a specific key
 * @param {string} key LS Key to be used
 * @returns true or false representing if data exists at key in LS
 */
function checkLSData(key) {
    if (localStorage.getItem(key) != null) {
        return true;
    }
    return false;
}

/**
 * retrieveLSData function
 * Used to retrieve data from LS at a specific key.
 * @param {string} key LS Key to be used
 * @returns data from LS in JS format
 */
function retrieveLSData(key) {
    let data = localStorage.getItem(key);
    try {
        data = JSON.parse(data);
    } catch (err) {
    } finally {
        return data;
    }
}

/**
 * updateLSData function
 * Used to store JS data in LS at a specific key
 * @param {string} key LS key to be used
 * @param {any} data data to be stored
 */
function updateLSData(key, data) {
    let json = JSON.stringify(data);
    localStorage.setItem(key, json);
}

function changeColor(getColor){
    let color = document.querySelector('.color');
    let selectColor = getColor.value;
    color.style.background = selectColor;
}

function saveAndExitTaskPopup() {
    closeTaskPopup();
    closeFullTaskPopup();

    let taskName = document.getElementById("task-name").value;
    let taskDesc = document.getElementById("task-desc").value;

    updateTask();
}

function updateTask(taskName, taskDesc) {
    let displayTask = document.getElementById("edit-container");
    let displayData = `<div class="edit-container" id="edit-container">
                    <div class="edit">
                        <input id="task-name"><br>
                        <input id="task-desc"><br>
                        <button class="cancel-edit" id="cancel-edit" onclick="location.href='#popup-container'">Cancel</button>
                        <button class="save-and-exit" id="save-and-exit" onclick="updateCard()">Save & Exit</button>
                        <div class="dropdown">
                            <div class="select">
                                <span class="selected">Tags</span>
                                <div class="caret"></div>
                            </div>
                            <u1 class="menu">
                                <li>Core</li>
                                <li>UI</li>
                                <li>All</li>
                            </u1>
                        </div>
                    </div>
                </div>`;

    return (displayTask.innerHTML = displayData);
}
