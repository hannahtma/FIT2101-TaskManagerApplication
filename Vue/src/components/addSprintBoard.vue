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
            data-bs-target="#exampleModal" style="left: -10px">Create Sprint +
          </button>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import Sprint from '@/classes/Sprint.js';

export default {
    props: {
        sprints: Array,
    },

    methods: {
        addSprintBoard() {
            let newSprintTitle = document.getElementById("task-title").value;
            this.displaySprint(newSprintTitle);
        },

        displaySprint(sprintTitle) {
            let sprint = {

                id: this.sprints.length,
                sprintName: sprintTitle,
            }
            this.$emit('display-sprint', sprint)
        }
    }
}
</script>