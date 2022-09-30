<script >
import { RouterLink, RouterView } from 'vue-router'
export default{
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

        }
    },
    methods:{
      addCards(card) {
            // this.cards = [...this.cards, ref(card)]
            this.cards.push(card)
            // console.log(this.cards)
            // this.$emit("add-card",card)

        },
        // editTask(id){
        //     this.editCardID = id
        //     this.showEdit = !this.showEdit
            
        // },
        deleteCard(id){
            // console.log("imhere")
            // console.log(id)
            // console.log(this.cards)
            this.cards = this.cards.filter((task)=> task.id !== id)
            // console.log(this.cards)
            
        },
        editTaskCard(index,card){
          this.cards[index] = card
          // console.log(this.cards)
        }
    }
}
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>

  <RouterView :cards="cards"  @add-card="addCards"  @delete-card="deleteCard" @edit-card="editTaskCard"/>
</template>

<style >


</style>
