<template>
  <nav class="navbar navbar-expand-sm">
    <!-- Brand -->
    <a class="navbar-brand" href="HTML File.html">SCRUMFY</a>
    <!-- Links -->
    <ul class="navbar-nav" style="position: absolute">
      <li class="nav-item">
        <a class="nav-link active" id="navLink" href="#">Dashboard</a>
      </li>
      <li class="nav-item dropdown" style="position: relative; left: 10px">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
          aria-expanded="false">Sprints</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Link 1</a>
          <a class="dropdown-item" href="#">Link 2</a>
          <a class="dropdown-item" href="#">Link 3</a>
        </div>
      </li>
      <!-- Dropdown -->
      <li class="nav-item dropdown" style="position: relative; left: 0px">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown"
          aria-expanded="false">Tasks</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Link 1</a>
          <a class="dropdown-item" href="#">Link 2</a>
          <a class="dropdown-item" href="#">Link 3</a>
        </div>
      </li>
      <li class="nav-item dropdown" style="position: relative; left: -15px">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-bs-toggle="dropdown"
          aria-expanded="false">Teams</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Link 1</a>
          <a class="dropdown-item" href="#">Link 2</a>
          <a class="dropdown-item" href="#">Link 3</a>
        </div>
      </li>
      <li>
        <div>
          <button class="btn btn-primary" id="createId" type="button" data-bs-toggle="modal"
            data-bs-target="#exampleModal" style="left: -10px">Create Task +
          </button>
        </div>
      </li>
    </ul>
  </nav>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Task Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="myForm">
            <div class="mb-3">
              <label for="task-title" class="col-form-label">Task Title:</label>
              <input type="text" class="form-control" id="task-title" placeholder="Enter task title here" />
            </div>
            <div class="mb-3">
              <label for="task-desc" class="col-form-label">Task Description:</label>
              <textarea class="form-control" id="task-desc" placeholder="Enter task description here"></textarea>
            </div>
            <div class="mb-3">
              <label for="story-points" class="col-form-label">Story Points:</label>
              <textarea class="form-control" id="story-point" placeholder="Enter story points here"></textarea>
            </div>
            <div class="mb-3">
              <label for="task-tags" class="col-form-label">Task Tag:</label>
              <br />
              <select class="selectTag" onchange="">
                <option value="">UI</option>
                <option value="">Core</option>
                <option value="">Testing</option>
              </select>
            </div>
            <div class="color">
              <label for="task-tags" class="col-form-label">Task Priority:</label>
              <br />
              <select class="selectColor" @change="changeColor">
                <option value="#ff6961">Critical</option>
                <option value="#ffb347">High</option>
                <option value="#fdfd96">Medium</option>
                <option value="#cff0cc">Low</option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-danger" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary" data-toggle="modal" id="button-save" @click="addTaskCard">
            Create Task
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="show-task-container" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel2">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="removeTask">
            Remove
          </button>
          <button type="button" class="btn btn-primary" @click="editTaskPopup">
            Edit Task
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="edit-task-container" data-bs-dismiss="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="task-details">Task Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="task-name" class="col-form-label">Task Name:</label>
              <input type="text" class="form-control" id="edit-task-name" />
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Task Description:</label>
              <textarea class="form-control" id="edit-task-description"></textarea>
            </div>
            <div class="mb-3">
              <label for="task-tags" class="col-form-label">Task Tag:</label>
              <br />
              <select class="selectTag" onchange="">
                <option value="">UI</option>
                <option value="">Core</option>
                <option value="">Testing</option>
              </select>
            </div>
            <div class="color">
              <label for="task-tags" class="col-form-label">Task Priority:</label>
              <br />
              <select class="selectColor" @change="changeColor">
                <option value="#ff6961">Critical</option>
                <option value="#fdfd96">High</option>
                <option value="#ffb347">Medium</option>
                <option value="#cff0cc">Low</option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-danger" data-bs-dismiss="modal" @click="closeTaskPopup">
            Cancel
          </button>
          <button type="button" class="btn btn-primary" @click="saveAndExitTaskPopup">
            Save and Exit
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="js">
import Task from '@/classes/Task.js';
import * as $ from 'jquery'
export default {
  mounted() {
    // const this.TASK_KEY = "allTasksData";
    // const allTasks = ;

  },
  data() {
    return {
      TASK_KEY: "allTasksData",
      allTasks: [],
    }
  },
  methods: {
    addTaskCard() {
      // TODO: Task 4
      //Collecting Data from ID's
      let taskId = this.allTasks.length;
      let newTitle = document.getElementById("task-title").value;
      let newDesc = document.getElementById("task-desc").value;
      let storyPoint = document.getElementById('story-point').value;

      let someTask = { "ID": taskId, "Task Name": newTitle, "Task Description": newDesc, "Story Point": storyPoint };
      this.allTasks.push(someTask);
      let data = new Task(this.allTasks);
      let json = JSON.stringify(data);
      localStorage.setItem(this.TASK_KEY, json);

      //Updating the display table/inventory with the user entered data
      // update LS
      // updateLSData(WAREHOUSE_KEY, inventory);
      // update display
      this.displayCard(newTitle, newDesc, storyPoint);
      $("#exampleModal").modal("hide");
      $("#exampleModal").on("hidden.bs.modal", function (e) {
        $("#exampleModal").find("input[type=text], textarea").val("");
      });

    },

    displayCard(title, desc, story) {
      // TODO: Task 3
      // let displayRef = document.getElementById("my-container");
      // let displayData = displayRef.innerHTML;
      // // This is used to display the entered data and add an edit button next to it
      // displayData += `<div class="card" style="width: 18rem;" onclick="showFullTask()">
      //                     <div class="card-body">
      //                         <h5 class="card-title">${title}</h5>
      //                         <p class="card-text" id="studentEnrolSummary">${desc}</p>
      //                         <p class="card-text" id="studentEnrolSummary2">Story Point: ${story}</p>
      //                     </div>
      //                 </div>`;

      // return (displayRef.innerHTML = displayData);
      let card = {

        id: 100000,
        status: 'todoblocked',
        taskName: title,
        description: desc,
        tags: ['CORE', 'UI'],
        storyPoints: story,
        priority: 'low'

      }
      console.log(card)
      this.$emit('display-card', card)
    },

    edit(taskName, taskDesc) {
      // store data in LS
      localStorage.setItem(TASK_NAME_KEY, taskName);
      localStorage.setItem(TASK_DESC_KEY, taskDesc);
      // redirect to edit page
      window.location = "#show-task-container";
    },

    /**
     * checkLSData function
     * Used to check if any data in LS exists at a specific key
     * @param {string} key LS Key to be used
     * @returns true or false representing if data exists at key in LS
     */
    checkLSData(key) {
      if (localStorage.getItem(key) != null) {
        return true;
      }
      return false;
    },

    /**
     * retrieveLSData function
     * Used to retrieve data from LS at a specific key.
     * @param {string} key LS Key to be used
     * @returns data from LS in JS format
     */
    retrieveLSData(key) {
      let data = localStorage.getItem(key);
      try {
        data = JSON.parse(data);
      } catch (err) {
      } finally {
        return data;
      }
    },

    /**
     * updateLSData function
     * Used to store JS data in LS at a specific key
     * @param {string} key LS key to be used
     * @param {any} data data to be stored
     */
    updateLSData(key, data) {
      let json = JSON.stringify(data);
      localStorage.setItem(key, json);
    },

    changeColor(event) {
      let color = document.querySelector('.color');
      let selectColor = event.target.value;
      color.style.background = selectColor;
    },

    showFullTask() {
      $('#show-task-container').modal('show');
    },

    removeTask() {
      if (localStorage.getItem()) {
        localStorage.removeItem();
      }
    },

    editTaskPopup() {
      $('#edit-task-container').modal('show');
    },

    saveAndExitTaskPopup() {
      let originalTaskName = document.getElementById('task-name');
      console.log(originalTaskName);
      let editedTaskName = document.getElementById('edit-task-name');
      let editedTaskDesc = document.getElementById('edit-task-description');
      for (let c = 0; c < this.allTasks.length; c++) {
        if (originalTaskName === this.allTasks[c]['Task Name']) {
          console.log(originalTaskName == this.allTasks[c]['Task Name']);
          this.allTasks[c]['Task Name'] = editedTaskName;
          this.allTasks[c]['Task Description'] = editedTaskDesc;
        }
      }

      console.log(this.allTasks);
      data = new Task(this.allTasks);
      let json = JSON.stringify(data);
      localStorage.setItem(this.TASK_KEY, json);
    },

    updateTask(taskName, taskDesc) {
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

    },
  },
  // name: 'AddTask',
  // data() {
  //   return {
  //     text: '',
  //     day: '',
  //     reminder: false,
  //   }
  // },
  // methods: {
  //   onSubmit(e) {
  //     e.preventDefault()

  //     if (!this.text) {
  //       alert('Please add a task')
  //       return
  //     }

  //     const newTask = {
  //       // id: Math.floor(Math.random() * 100000),
  //       text: this.text,
  //       day: this.day,
  //       reminder: this.reminder,
  //     }

  //     this.$emit('add-task', newTask)

  //     this.text = ''
  //     this.day = ''
  //     this.reminder = false
  //   },
  // },
}
</script>

<style scoped>
/* .add-form {
      margin-bottom: 40px;
    }
    
    .form-control {
      margin: 20px 0;
    }
    
    .form-control label {
      display: block;
    }
    
    .form-control input {
      width: 100%;
      height: 40px;
      margin: 5px;
      padding: 3px 7px;
      font-size: 17px;
    }
    
    .form-control-check {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .form-control-check label {
      flex: 1;
    }
    
    .form-control-check input {
      flex: 2;
      height: 20px;
    } */
body {
  background-color: #fff;
  font-family: "Poppins";
}

.task-container {
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
}

.show-task {
  background-color: #e6746c;
  border-radius: 5px;
  padding: 30px 60px;
  width: 250px;
  height: 150px;
  max-width: 100%;
  text-align: center;
  cursor: pointer;
}

.popup-container {
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.popup-container.show {
  pointer-events: auto;
  opacity: 1;
}

.popup {
  background-color: #e6746c;
  border-radius: 5px;
  padding: 30px 60px;
  width: 250px;
  height: 150px;
  max-width: 100%;
  text-align: center;
}

.popup h1 {
  margin: 0;
}

.popup p {
  font-size: 14px;
  opacity: 0.7;
}

.edit-task button {
  background-color: rgba(0, 0, 0, 0.2);
  border: 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: #fff;
  padding: 10px 25px;
  cursor: pointer;
}

.edit-container {
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.edit-container.show {
  pointer-events: auto;
  opacity: 1;
}

.show-task-container.show {
  pointer-events: auto;
  opacity: 1;
}

.edit {
  background-color: #e6746c;
  border-radius: 5px;
  padding: 30px 60px;
  width: 250px;
  height: 150px;
  max-width: 100%;
  text-align: center;
}

.save-and-exit button {
  background-color: rgba(0, 0, 0, 0.2);
  border: 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: #fff;
  padding: 10px 25px;
  cursor: pointer;
}

.dropdown {
  width: 80px;
  height: 50px;
  position: absolute;
  left: 10px;
  bottom: 10px;
  margin: 2em;
}

.dropdown * {
  box-sizing: border-box;
}

.select {
  background: #01819a;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px #2a2f3b solid;
  border-radius: 0.5em;
  padding: 1em;
  cursor: pointer;
  transition: 0.3s;
}

.select-clicked {
  border: 2px #26489a solid;
  box-shadow: 0 0 0.8em #26490a;
}

.select:hover {
  background: #323741;
}

.caret {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #fff;
  transition: 0.3s;
}

.caret-rotate {
  transform: rotate(180deg);
}

.menu {
  list-style: none;
  padding: 0.2em 0.5em;
  background: #01819a;
  border: 1px #363a43 solid;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);
  border-radius: 0.5em;
  color: #9fa5b5;
  position: absolute;
  top: 3em;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  opacity: 0;
  display: none;
  transition: 0.2s;
  z-index: 1;
}

.menu li {
  padding: 0.7em 0.5em;
  margin: 0.3em 0;
  border-radius: 0.5em;
  cursor: pointer;
}

.menu li:hover {
  background: #2a2d35;
}

.active {
  background: #23242a;
}

.menu-open {
  display: block;
  opacity: 1;
}

nav.navbar.navbar-expand-sm {
  background-color: #EC746C;
}

ul.navbar-nav {
  position: fixed;
  list-style-type: none;
  margin: 0;
  padding: 0;
  left: 150px;
}

#navbarDropdown,
#navbarDropdown2,
#navbarDropdown3,
#navLink {
  font-weight: 500;
  text-transform: uppercase;
  color: white;
}

a.nav-link.active {
  background-color: #EC746C;
  color: black;
  position: relative;
  top: 35.5px
}

a.navbar-brand {
  color: white;
  position: relative;
  left: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-style: italic;
}

a.navbar-brand:hover {
  color: black;
}

a.dropdown-item {
  color: black;
}

div.dropdown-menu {
  background-color: white;
}

#createId {
  position: relative;
  left: 120px;
  background-color: rgb(255, 136, 25);
  text-transform: uppercase;
  font-size: smaller;
  top: 39.5px;
  border: none;
}

div.card {
  margin-left: 10px;
  margin-top: 10px;
}

li.nav-item.dropdown {
  top: 4.5px;
}
</style>
