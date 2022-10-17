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
      sprints: [],
      // currentID: cards.length,

    }
  },

  methods: {
    addCards(card) {
      // this.cards = [...this.cards, ref(card)]
      this.cards.push(card)

    },
    deleteCard(id) {
      this.cards = this.cards.filter((task) => task.id !== id)

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

    goToTeamBoard() {
      this.$router.push('teamboard');
    },

    goToHome() {
      this.$router.push('app');
    },

    displayProductBacklog(card) {
      this.cards.push(card)
    },
    onDropDelete(id) {
      // console.log(this.cards)
      this.cards = this.cards.filter((task) => task.id !== id)
      // console.log(this.cards)
    },
    onDropAdd(passCard) {
      this.cards.push(passCard)
      // console.log(this.cards)

    },
    addToSprint(sprint) {
      this.sprints.push(sprint)
      // console.log(this.sprints, 'app')
    },
    loadCards(cards) {
      this.cards = cards
    }
  }
}
</script>

<template>


  <RouterView :key="$route.fullPath" :cards="cards" :sprints="sprints" @add-card="addCards" @delete-card="deleteCard"
              @edit-card="editTaskCard"
              @on-drop-delete="onDropDelete" @on-drop-add="onDropAdd" @add-to-sprint="addToSprint"
              @load-card-from-local-storage="loadCards"/>
</template>

<style lang="scss">
body {
  background-color: #ffeaa9;
}

.col:not(:last-child) {
  margin-right: 10px;
}

.modal-body, .modal-footer, .modal-header {
  p {
    margin-bottom: 0;
  }

  background-color: #ffeaa9;
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
  font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
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
  font-family: "Century Gothic", serif;
  font-style: italic;
  font-weight: bold;
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

  background-color: rgb(175, 65, 139);
  text-transform: uppercase;
  font-size: smaller;
  top: 39.5px;
  border: none;
}


div.card {
  margin-top: 20px;
}

li.nav-item.dropdown {
  top: 4.5px;
}
</style>