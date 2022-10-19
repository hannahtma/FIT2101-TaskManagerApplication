<template>
  <body>
    <div class="row align-items-top">
      <div class="col">
        <div class="card row" :class="card.priority"
             data-bs-toggle="modal" data-bs-target="#cardPopupSprintBacklog" v-for="card in this.displaySprintBacklog">
          <h3>{{ card.taskName }}</h3>
          <p>Description: {{ card.description }}</p>
          <div>Status: {{ card.status }}</div>
          <div>Type: {{ card.type }}</div>
          <div class="story-points">
            {{ card.storyPoints }}
          </div>
          <div>Assigned To: {{ card.assign }}</div>
          <span class="tag" v-for="tag in card.tags">{{ tag }}</span>
          <div>Time: {{ card.time }}</div>
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
                    @click="logTimeAndDateForCard(this.onClickCardID)">
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
    this.sprintID = this.$route.query.id
    console.log(this.sprintID)
    console.log(parseInt(this.sprintID))
    if (localStorage.getItem("sprint" + this.sprintID)) {
      console.log('mount', JSON.parse(localStorage.getItem("sprint" + this.sprintID)))
      const localCards = JSON.parse(localStorage.getItem("sprint" + this.sprintID))
      this.$emit('load-sprint-backlog-from-local-storage', localSprintBacklog)
      this.displaySprintBacklog = localSprintBacklog
    }
    console.log(localStorage.getItem("sprint-1"))
    console.log(this.sprintBacklog)
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
    }
  },

  data() {
    return {
      displaySprintBacklog: [],
    }
  }
}
</script>
