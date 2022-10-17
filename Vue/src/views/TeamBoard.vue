<template>
  <body>
  <nav class="navbar navbar-expand-sm">
    <!-- Brand -->
    <a class="navbar-brand" href="HTML File.html">SCRUMFY</a>
    <!-- Links -->
    <ul class="navbar-nav" style="position:absolute">
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
      <li class="nav-item dropdown" style="position: relative; left: 0">
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
                  data-bs-target="#popUpForAddMember" style="left: -10px">Add Team Member
          </button>
        </div>
      </li>
    </ul>
  </nav>
  <div class="modal fade" id="popUpForAddMember" tabindex="-1" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Team Member Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="myForm" style="display: inline-block">
            <div class="mb-3">
              <label for="name" class="form-label">Enter Name: </label>
              <input type="text" id="name" placeholder="Enter your name here">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Enter Email: </label>
              <input type="email" id="email" placeholder="Enter your email here">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-danger" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary" data-toggle="modal" id="button-save" data-bs-dismiss="modal"
                  @click="">
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
export default {
  name: "TeamBoard"
}
</script>

<style scoped>
#name, #email {
  margin-left: 5px;
}
</style>