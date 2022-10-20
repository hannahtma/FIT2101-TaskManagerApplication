<template>
  <body>
    <nav class="navbar navbar-expand-sm">
      <!-- Brand -->
      <a class="navbar-brand" href="/home">SCRUMFY</a>
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
            <button v-show="onCreate" class="btn btn-primary" id="createId" type="button" data-bs-toggle="modal"
                    data-bs-target="#popUpForCreateSprint" style="left: -10px">Start Sprint
            </button>
            <button v-show="!onCreate" class="btn btn-primary" id="createId" type="button" data-bs-toggle="modal"
                    data-bs-target="#popUpFor" style="left: -10px">Save & Exit
            </button>
          </div>
        </li>
      </ul>
    </nav>

    <div class="container text-start">
      <div class="row align-items-top">
        <div class="col">
          <h3 id="col-header2">Sprint Backlog</h3>
          <div @click="onClickCardInSprintBacklog(card.id)" class="card row" :class="card.priority" data-bs-toggle="modal"
              data-bs-target="#popUpForLogWork" v-for="card in this.displaySprintBacklog"
              draggable="true">
            <h3>{{ card.taskName }}</h3>
            <p>Description: {{ card.description }}</p>
            <div>Status: {{ card.status }}</div>
            <div>Type: {{ card.type }}</div>
            <div class="story-points">
              {{ card.storyPoints }}
            </div>
            <div>Assigned To: {{ card.assign }}</div>
            <span class="tag" v-for="tag in card.tags">{{ tag }}</span>
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
  </body>
</template>

<script>
export default {
  props: {
    cards: Array,
  },

  mounted() {
    // this.sprintID = this.$route.query.id
    // console.log(this.sprintID)
    // console.log(parseInt(this.sprintID))
    if (localStorage.getItem("sprint" + parseInt(this.sprintID))) {
      console.log('mount', JSON.parse(localStorage.getItem("sprint" + this.sprintID)))
      this.displaySprintBacklog = JSON.parse(localStorage.getItem("sprint" + this.sprintID))
      // const localCards = JSON.parse(localStorage.getItem("sprint" + this.sprintID))
      // this.$emit('load-sprint-backlog-from-local-storage', localSprintBacklog)
      // this.displaySprintBacklog = localSprintBacklog
    }
    console.log(this.displaySprintBacklog)
  },

  methods: {
    getCardsForSprintBacklog() {
      return this.sprintBacklog;
    },

    displaySprintBacklog(card) {
      this.$emit("add-card", card)
      this.displaySprintBacklog = this.sprintBacklog
    },

    addTimeToCard(id) {
      const index = this.displaySprintBacklog.findIndex((task) => task.id === id)
      let newTime = document.getElementById("timeLog").value;
      card.push(newTime);
      this.displaySprintBacklog[index] = card
    },

    onClickCardInSprintBacklog(id) {
      console.log(id)
      this.onClickCardID = id
      // this.showCardInSprintBacklog = !this.showCardInSprintBacklog
      this.selectedCard = this.displaySprintBacklog.find((card) => card.id === id)
      console.log(this.selectedCard)
      console.log(this.displaySprintBacklog)
    },

    logTimeAndDateForCard(id) {
      // console.log(id)
      let newTime = document.getElementById("timeLog").value;
      console.log(newTime)
      // console.log(this.displaySprintBacklog[id])
      this.$emit("log-time-and-date", id)
      this.displaySprintBacklog[this.onClickCardID].time = newTime + " hour(s)"
      localStorage.setItem("sprint" + parseInt(this.sprintID), JSON.stringify(this.displaySprintBacklog))
    },
  },

  data() {
    return {
      displaySprintBacklog: [],
      sprintID: 0,
      selectedCard: {},
      onClickCardID: 0,
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
