<template>
  <body>
  <AddSprintBoard :sprints="this.sprints" @display-sprint-board="addSprintBoards"/>
  <h2>My Sprints</h2>

  <div class="container" v-for="sprint in this.sprints">
    <button class="btn btn-primary me-md-2 " :style="styleObject" @click="goToProductBacklog(sprint.sprintID)"
            :id="sprint.id"
            :clickSprint="this.clickSprint">
      {{ sprint.sprintName }}
      Start Date : {{ sprint.startDate }}
      End Date : {{ sprint.endDate }}
    </button>


  </div>
  </body>
</template>
<style>
h2 {
  margin-left: 86px;
  margin-top: 15px;
  font-family: "Century Gothic", serif;
  text-transform: uppercase;
  font-weight: bold;
}

body {
  background-color: #ffeaa9;
}
</style>

<script>
import Button from '@/components/Button.vue';
import AddSprintBoard from '@/components/addSprintBoard.vue';
import ProductBacklogVue from './ProductBacklog.vue';


export default {
  props: {
    sprints: Array,
  },
  mounted() {
    // console.log(this.sprints)
  },
  components: {
    Button,
    AddSprintBoard,
  },

  methods: {
    addSprintBoards(sprintBoard) {
      this.sprints.push(sprintBoard)
    },

    onClickSprintBoard(id) {
      this.onClickSprintBoardID = id
      this.showProductBacklog = !this.showProductBacklog

    },
    goToProductBacklog(sprintID) {
      console.log(this.sprints)
      console.log(sprintID)
      this.$router.push({
        name: 'productbacklog',
        component: ProductBacklogVue,

        // props:true,
        // params:{id},
        query: {clickSprint: true, id: sprintID}
        // props: {clickSprint:true}
      })
    }

  },

  data() {
    return {
      // sprints : [],
      clickSprint: true,
      styleObject: {
        colorVar: 'white',
        backgroundColor: 'rgb(229,102,102)',
        border: 'none',
        fontFamily: 'Century Gothic',
        marginLeft: '-12px',
        marginTop: '10px',
      }
    }
  }
}
</script>