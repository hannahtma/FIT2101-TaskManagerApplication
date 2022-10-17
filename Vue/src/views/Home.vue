<template>
    <nav class="navbar navbar-expand-sm">
      <!-- Brand -->
      <a class="navbar-brand" href="HTML File.html">SCRUMFY</a>
      <!-- Links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" id="navLink" href="#">Home</a>
        </li>
        <li class="nav-item dropdown" style="position:relative; left:30px;">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
             aria-expanded="false">Sprints</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Link 1</a>
            <a class="dropdown-item" href="#">Link 2</a>
            <a class="dropdown-item" href="#">Link 3</a>
          </div>
        </li>
        <!-- Dropdown -->
        <li class="nav-item dropdown" style="position:relative; left:60px;">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button"
             data-bs-toggle="dropdown" aria-expanded="false">Tasks</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Link 1</a>
            <a class="dropdown-item" href="#">Link 2</a>
            <a class="dropdown-item" href="#">Link 3</a>
          </div>
        </li>
        <li class="nav-item dropdown" style="position:relative; left:90px;">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button"
             data-bs-toggle="dropdown" aria-expanded="false">Teams</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Link 1</a>
            <a class="dropdown-item" href="#">Link 2</a>
            <a class="dropdown-item" href="#">Link 3</a>
          </div>
        </li>
      </ul>
    </nav>
    <br>
  
    <div class="container">
      <div class="d-grid gap-2">
        <RouterLink class="btn btn-primary me-md-2" to="/home">HOME</RouterLink>
      </div>
      <div class="d-grid gap-2">
        <RouterLink class="btn btn-primary me-md-2" to="/sprintboard">SPRINT BOARD</RouterLink>
      </div>
      <div class="d-grid gap-2">
        <RouterLink class="btn btn-primary me-md-2" to="/dashboard">TASK
          BOARD
        </RouterLink>
      </div>
      <div class="d-grid gap-2">
        <RouterLink class="btn btn-primary me-md-2" to="teamboard">TEAM BOARD</RouterLink>
      </div>
  
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        cards: [
          // {
          //     id: 1,
          //     status: 'todoblocked',
          //     taskName: 'Task Name 1',
          //     description: 'Description 1',
          //     tags: ['CORE', 'UI'],
          //     taskType: 'bug',
          //     storyPoints: 5,
          //     priority: 'low'
  
          // }, {
          //     id: 2,
          //     status: 'todoblocked',
          //     taskName: 'Task Name 2',
          //     description: 'Description 2',
          //     tags: ['CORE', 'UI'],
          //     storyPoints: 3,
          //     priority: 'high'
          // }, {
          //     id: 3,
          //     status: 'inprogress',
          //     taskName: 'Task Name 3',
          //     description: 'Description 3',
          //     tags: ['CORE'],
          //     storyPoints: 2,
          //     priority: 'medium'
          // }, {
          //     id: 6,
          //     status: 'inprogress',
          //     taskName: 'Task Name 6',
          //     description: 'Description 6',
          //     tags: ['CORE', 'UI'],
          //     storyPoints: 2,
          //     priority: 'critical'
          // }, {
          //     id: 4,
          //     status: 'deployed',
          //     taskName: 'Task Name 4',
          //     description: 'Description 4',
          //     tags: ['CORE', 'UI'],
          //     storyPoints: 4,
          //     priority: 'low'
          // }, {
          //     id: 5,
          //     status: 'done',
          //     taskName: 'Task Name 5',
          //     description: 'Description 5',
          //     tags: ['CORE', 'UI'],
          //     storyPoints: 5,
          //     priority: 'low'
          // }
        ],
        // currentID: cards.length,
  
        sprints: [],
  
      }
    },
  
    methods: {
      addCards(card) {
        // this.cards = [...this.cards, ref(card)]
        this.cards.push(card)
        localStorage.setItem(card.id, card)
      },
      // editTask(id){
      //     this.editCardID = id
      //     this.showEdit = !this.showEdit
  
      // },
      deleteCard(id) {
        this.cards = this.cards.filter((task) => task.id !== id)
        // console.log(this.cards)
  
      },
      editTaskCard(index, card) {
        this.cards[index] = card
        // console.log(this.cards)
      },
  
      addSprintBoards(sprintBoard) {
        this.sprints.push(sprintBoard)
      },
  
      goToDashboard() {
        this.$router.push({
          path: '/dashboard',
          name: 'dashboard',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
        });
      },
  
      goToSprintBoard() {
        this.$router.push('sprintboard');
      },
  
      goToHome() {
        this.$router.push('app');
      },
  
      displayProductBacklog(card) {
        this.cards.push(card)
      }
    }
  }
  </script>
  
  <style>
  .btn.btn-primary.me-md-2 {
    background-color: black;
    border-color: white;
    width: 50%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    text-align: left;
  }
  
  .btn.btn-primary.me-md-2:active {
    color: black;
  }
  
  /* nav.navbar.navbar-expand-sm {
      background-color: rgb(0, 128, 255);
  }
  
  ul.navbar-nav{
      position:relative;
      left:30px;
  }
  
  #navbarDropdown, #navbarDropdown2, #navbarDropdown3, #navLink {
      font-weight: 500;
      text-transform: uppercase;
  }
  
  a.nav-link.active{
      color: white;
  
  }
  
  a.navbar-brand{
      color: black;
      position:relative;
      left:20px;
      top:-1px;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-style: italic;
  }
  a.navbar-brand:hover{
      color: black;
  }
  
  a.dropdown-item{
      color: white;
  }
  
  div.dropdown-menu{
      background-color: black;
  }
  
  div.container {
      position:relative;
      left:40px;
  } */
  
  </style>