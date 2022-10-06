<template>
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
              data-bs-target="#exampleModal" style="left: -10px">Start Sprint
            </button>
          </div>
        </li>
      </ul>
    </nav>
</template>

<script lang="js">
    import * as $ from 'jquery'
    export default {
        props:{
          cards : Array,
            // test : String
        },

        mounted() {

        },
     
        data() {
            return {
            }
        },
      
        methods: {
            addCardToProductBacklog() {
            let newTitle = document.getElementById("task-title").value;
            let newDesc = document.getElementById("task-desc").value;
            let storyPoint = document.getElementById('story-point').value;
            let status = document.getElementById('status').value;
            let tag = document.getElementById('tag').value;
            let type = document.getElementById('type').value;
            let assign = document.getElementById('assign').value;
            let priority = document.getElementById('priority').value;

            this.displayCardInProductBacklog(newTitle, newDesc, storyPoint,status,tag,type,assign,priority);
            },
        
            displayCardInProductBacklog(title, desc, story,status,tag,type,assign,priority) {
                console.log("cards: ",this.cards)
                let card = {
            
                    id: this.cards.length,
                    taskName: title,
                    description: desc,
                    status: status,
                    storyPoints: story,
                    tags: [tag],
                    type:type,
                    priority: priority,
                    assign:assign
            
                }
                console.log(card)
                this.$emit('display-card-in-product-backlog', card)
            }
        }
    }
</script>

<style>

</style>
