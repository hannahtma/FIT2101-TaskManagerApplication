<template>
  <body>
      
  <!-- <AddCardToProductBacklog :cards="this.productBacklog" @display-card-in-product-backlog="addTaskCardToProductBacklog"/> -->
  <nav class="navbar navbar-expand-sm">
    <!-- Brand -->
    <a class="navbar-brand" >SCRUMFY</a>
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
          <button v-show="onCreate" class="btn btn-primary" id="createId" type="button" data-bs-toggle="modal"
            data-bs-target="#popUpForCreateSprint" style="left: -10px">Start Sprint
          </button>
          <button v-show="!onCreate" @click="onSaveAndExit"  class="btn btn-primary" id="createId" type="button" data-bs-toggle="modal"
            data-bs-target="#popUpFor" style="left: -10px">Save & Exit
          </button>
        </div>
      </li>
    </ul>
  </nav>
      <div class="container text-start">
          <div class="row align-items-top" >
              <div class="col" @drop="onDrop($event, 'product')" @dragover.prevent @dragenter.prevent>
                <h3 id="col-header1">Product Backlog</h3>
                  <!-- <div class="row" id="progress3">Deployed</div> -->
                  <div @click="onClickCardInProductBacklog(card.id)" class="card row" :class="card.priority"  data-bs-toggle="modal" data-bs-target="#cardPopupProductBacklog" v-for="card in this.productBacklog"
                  draggable="true" @dragstart="startDrag($event, card)">
                      <h3>{{card.taskName}}</h3>
                      <p>Description: {{card.description}}</p>
                      <div>Status: {{card.status}}</div>
                      <div>Type: {{card.type}}</div>
                      <div class="story-points">
                          {{card.storyPoints}}
                      </div>
                      <div>Assigned To: {{card.assign}}</div>
                      <span class="tag" v-for="tag in card.tags">{{tag}}</span>
                  </div>
              </div>
              <div class="col" @drop="onDrop($event, 'sprint')" @dragover.prevent @dragenter.prevent>
                <h3 id="col-header2">Sprint Backlog</h3>
                  <div @click="onClickCardInSprintBacklog(card.id)" class="card row" :class="card.priority" data-bs-toggle="modal" data-bs-target="#popUpForLogWork" v-for="card in this.sprintBacklog"
                  draggable="true" @dragstart="startDrag($event, card)">
                      <h3>{{card.taskName}}</h3>
                      <p>Description: {{card.description}}</p>
                      <div>Status: {{card.status}}</div>
                      <div>Type: {{card.type}}</div>
                      <div class="story-points">
                          {{card.storyPoints}}
                      </div>
                      <div>Assigned To: {{card.assign}}</div>
                      <span class="tag" v-for="tag in card.tags">{{tag}}</span>
                      <div>Accumulated Time: {{ card.time }}</div>
                  </div>  
              </div>
          </div>        
      </div>
  
      <div class="modal fade" id="popUpForLogWork" tabindex="-1" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Log Work Time Details</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="myForm" style="display: inline-block">
                <div class="mb-3">
                  <label for="sprintStartDate">Start Date:</label>
                  <input type="datetime-local" id="logTimeStartDate" name="sprintStartDate" v-model="logTimeStartDate">
                </div>
                <div class="mb-3">
                  <label for="sprintEndDate">End Date:</label>
                  <input type="datetime-local" id="logTimeEndDate" name="sprintEndDate" v-model="logTimeEndDate">
                </div>
                <div class="mb-3">
                  <label for="task-title" class="col-form-label">Time Hours:</label>
                  <input type="number" min="0" id="timeLog" placeholder="Enter time hours here"
                        v-model="sprintTimeHours"/>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary btn-danger" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-primary" data-toggle="modal" id="button-save" data-bs-dismiss="modal"
                      @click="logTimeAndDateForCard(this.onClickCardID)" >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="modal fade" id="popUpForCreateSprint" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Sprint Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="myForm">
          <div class="mb-3">
            <label for="task-title" class="col-form-label">Sprint Title:</label>
            <input type="text" class="form-control" id="task-title" placeholder="Enter sprint title here" v-model="sprintTitle" />
          </div>
          <div class="mb-3">
              <label for="sprintStartDate">Start Date:</label>
              <input type="datetime-local" id="sprintStartDate" name="sprintStartDate" v-model="sprintStartDate">
          </div>
          <div class="mb-3">
              <label for="sprintEndDate">End Date:</label>
              <input type="datetime-local" id="sprintEndDate" name="sprintEndDate" v-model="sprintEndDate">
          </div>
      
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary btn-danger" data-bs-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary" data-toggle="modal" id="button-save" data-bs-dismiss="modal" @click="addToSprintBoard">
          Confirm 
        </button>
      </div>
    </div>
  </div>
</div>
  </body>
</template>    

<script>
  import Button from '@/components/Button.vue';
  import AddCardToProductBacklog from '@/components/addCardToProductBacklog.vue';
  import AddTask from '@/components/addTask.vue';
  import {toRaw} from 'vue';

  export default{
      props: {
          id: Number, //this is for the sprint length
          sprints : Array,
          clickSprint: Boolean,

      },
      
      // watch: {
      //     productBacklog: {
      //         handler(){
      //             console.log(this.productBacklog)
      //             localStorage.setItem("cards", JSON.stringify(this.productBacklog))
                  
      //         },
      //         deep: true
      //     },
      //     sprintBacklog: {
      //         handler(){
      //             localStorage.setItem("sprint"+this.id, JSON.stringify(this.sprintBacklog))
      //             // console.log('test')
      //         },
      //         deep: true
      //     }
      // },
      mounted(){
          // this.productBacklog = this.cards
          // console.log(this.cards)
          console.log('mount')
          console.log(this.$route.query.clickSprint)
          
          // console.log(this.$route.params.data)
          // this.onCreate = this.$route.params.data
          // console.log("create",this.onCreate)
          // if (this.clickSprint){
          //     this.onCreate = !this.onCreate
          // }
          
          this.sprintID = this.$route.query.id
          if(this.$route.query.id){this.sprintID = parseInt(this.sprintID)}
          else {
              this.sprintID = -1
          }
          
          console.log(parseInt(this.sprintID))
          // console.log({id:this.$route.query.id})
          // console.log(parseInt(this.$route.query.id))
          // if (this.$route.query.id){
          //     this.id = JSON.parse(this.$route.query.id)
          // }
          
          console.log("id",this.sprintID)
          this.onCreate = this.$route.query.clickSprint !== 'true'
          console.log(this.onCreate)

          if (localStorage.getItem("cards")){
              this.productBacklog = JSON.parse(localStorage.getItem("cards"))
              // console.log(this.productBacklog)
          }
          if(!this.onCreate){
              if (localStorage.getItem("sprint"+this.sprintID)){
              this.sprintBacklog = JSON.parse(localStorage.getItem("sprint"+this.sprintID))
              console.log(this.sprintBacklog,'mount')
          }
          }
         
      },
      components: {
          Button,
          AddCardToProductBacklog,
          AddTask,
      },

      methods: {
          displayProductBacklog(card) {
              this.$emit("add-card",card)
              this.productBacklog = this.cards
          },

          onClickCardInProductBacklog(id){
              this.cardId = id
              // this.showCardInProductBacklog = !this.showCardInProductBacklog
              this.selectedCard = this.productBacklog.find((card)=>card.id ===id)
              console.log(this.productBacklog)
              console.log(this.productBacklog.find((card)=>card.id ===id))
              // this.$emit("edit-card",id)
          },

          displaySprintBacklog(card) {
              this.$emit("add-card",card)
          },

          onClickCardInSprintBacklog(id) {
            // this.displaySprintBacklog = localStorage.getItem("sprint" + this.sprintID)
            // console.log(this.sprintID)
            this.onClickCardID = id
            // this.showCardInSprintBacklog = !this.showCardInSprintBacklog
            this.selectedCard = this.sprintBacklog.find((card) => card.id === id)
            // console.log(this.selectedCard)
            console.log(this.sprintBacklog)
          },

          logTimeAndDateForCard(id) {
            // console.log(id)
            this.onClickCardID = id
            console.log("card id" +this.onClickCardID)
            let newTime = document.getElementById("timeLog").value;
            // console.log(newTime)
            // console.log(this.displaySprintBacklog[id])
            this.$emit("log-time-and-date", id)
            console.log(this.sprintBacklog[this.onClickCardID])
            this.selectedCard = this.sprintBacklog.find((card)=>card.id ===id)
            this.selectedCard.time = newTime + " hour(s)"
            localStorage.setItem("sprint" + parseInt(this.sprintID), JSON.stringify(this.sprintBacklog))
          },

          startDrag(event, card) {
              // console.log(card)
              event.dataTransfer.dropEffect = 'move'
              event.dataTransfer.effectAllowed = 'move'
              event.dataTransfer.setData('cardID', card.id)
          },

          onDrop(event, dropList) {
              const cardID = event.dataTransfer.getData('cardID')
              if (dropList === 'sprint'){
                  const returnCard = this.productBacklog.find((card) => card.id == cardID)
                  this.productBacklog = this.productBacklog.filter((card)=> card!==returnCard)
                  this.sprintBacklog.push(returnCard)
                  this.$emit('on-drop-delete',returnCard.id)
              }
              else{
                  const returnCard = this.sprintBacklog.find((card) => card.id == cardID)
                  // console.log(this.sprintBacklog)
                  this.sprintBacklog = this.sprintBacklog.filter((card)=> card!==returnCard)
                  // console.log(this.sprintBacklog)
                  // localStorage.setItem("cards", JSON.stringify(this.productBacklog))
                  this.productBacklog.push(returnCard)
                  this.$emit('on-drop-add',returnCard)

              }
              
              
          },
          addToSprintBoard(){
              // console.log('test')
              const sprint = {
                  sprintID: this.sprints.length,
                  sprintName: this.sprintTitle,
                  startDate : this.sprintStartDate,
                  endDate : this.sprintEndDate
              }
              // console.log(sprint)
              localStorage.setItem("cards", JSON.stringify(this.productBacklog))
              localStorage.setItem("sprint"+this.sprints.length, JSON.stringify(this.sprintBacklog))
              this.$emit('add-to-sprint',sprint)
              this.$router.back()
              // this.$router.push('sprintboard')
          },
          onSaveAndExit(){
              localStorage.setItem("cards", JSON.stringify(this.productBacklog))
              localStorage.setItem("sprint"+this.sprintID, JSON.stringify(this.sprintBacklog))
              this.$router.back()
          }
      },

      data() {
          return {
              productBacklog: [],
              showCardInProductBacklog: false,
              selectedCard:{},
              sprintBacklog: [],
              onCreate: true,
              sprintTitle: '',
              sprintStartDate : '',
              sprintEndDate : '',
              sprintID: 0,



          }
      }
  }

</script>

<style scoped lang="scss">
#createId {
  background-color: #af418b;
  text-transform: uppercase;
  font-size: smaller;
}

.lists {
  display: flex;
  flex: 1;
  width: 100%;
  overflow-x: scroll;
}

.lists .list {
  display: flex;
  flex-flow: column;
  flex: 1;

  width: 100%;
  min-width: 250px;
  max-width: 350px;
  height: 100%;
  min-height: 150px;

  background-color: rgba(0, 0, 0, 0.1);
  margin: 0 15px;
  padding: 8px;
  transition: all 0.2s linear;
}

.lists .list .list-item {
  background-color: #f3f3f3;
  border-radius: 8px;
  padding: 15px 20px;
  text-align: center;
  margin: 4px 0;
}

.card {
  background: white;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  margin: 20px auto;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &.critical {
    background-color: #ff6961;
  }

  &.high {
    background-color: #fdfd96;
  }

  &.medium {
    background-color: #ffb347;
  }

  &.low {
    background-color: #cff0cc;
  }

  .tag {
    background: #01819A;
    color: white;
    font-size: 0.75rem;
    padding: 5px 15px;
    border-radius: 5px;
    display: inline-block;

    &:not(:last-child) {
      margin-bottom: 3px;
    }
  }

  .h3 {
    color: blue;
  }

  .p {
    margin-bottom: 0;
  }
}

#sprintStartDate, #sprintEndDate {
  padding-left: 5px;
  margin-left: 5px;
}

#timeLog {
  margin-left: 5px;
}

div.col {
  box-shadow: 0 0 0 5px #9d3b3b;
  border-radius: 1em;
  padding: 1em 2em;
  margin-top: 15px;
}

#col1 {
  margin-right: 20px;
}

#col2 {
  margin-left: 20px;
}

#col-header1, #col-header2 {
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-family: "Century Gothic", AppleGothic, sans-serif;
  font-weight: bold;
  background: -webkit-linear-gradient(#e16dbb, #ef8983);
}
</style>
