<template>
    <nav class="navbar navbar-expand-sm">
    <!-- Brand -->
    <a class="navbar-brand" href="HTML File.html">SCRUMFY</a>
    <!-- Links -->
    <ul class="navbar-nav" style="position:absolute">
      <li class="nav-item">
        <a class="nav-link active" id="navLink" href="#">Sprints</a>
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
            data-bs-target="#add-sprint-name" style="left: -10px" >Create Sprint +
          </button>
        </div>
      </li>
    </ul>
  </nav>
  <div class="modal fade" id="add-sprint-name" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Sprint Title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="title-name" class="col-form-label">Title:</label><input type="text" class="form-control" id="title-name">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="savesprint" @click="addSprint()">Create Sprint</button>
        </div>
      </div>
    </div>
  </div>
  <h2>My Sprints</h2>
  <div id="container">
  </div>
</template>

<script>
import Sprint from '@/classes/Sprint.js';
import * as $ from 'jquery'

let c = 0;
export default {
    props: {
        sprints: Array,
    },

    methods: {
        addSprintBoard() {
            let newSprintTitle = document.getElementById("sprint-title").value;
            this.displaySprint(newSprintTitle);
        },

        displaySprint(sprintTitle) {
            let sprint = {

                id: this.sprints.length,
                sprintName: sprintTitle,

            }
            this.$emit('display-sprint', sprint)
        },

        goToProductBacklog() {
            this.$router.push('productbacklog');
        },
        addSprint() {
          let title = document.getElementById("title-name").value;
          if (title !== "") {
            c += 1;
            $("#container").append(
                '<div class="card" id="sprint' + c + '">' + title + "</div>"
            );
          } else {
            alert("Please enter a sprint title");
          }
        },
    }
}
document.body.addEventListener("click", function (e) {
  if (e.target.closest("div.card")) {
    this.goToProductBacklog();
  }
});
</script>
<style>

#createId:hover {
  background-color: red;
}


#savesprint {
  border: none;
  background-color: #ec746c;
}

#savesprint:hover {
  background-color: #d6635b;
}

body {
  background-color: #ffffff;
  font-family: "Roboto", Helvetica, sans-serif;
}

div.card {
  line-height: 200%;
  /*padding-left: 10px;*/
  line-height: 20px;

  margin-left: 20px;
  /*margin-right: 20px;*/
  /*margin-top: 20px;*/
  cursor: pointer;
  background-color: orange;
  text-transform: uppercase;
  font-style: italic;
  font-weight: bolder;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
div.card:hover {
  background-color: rgb(203, 147, 42);
}
</style>