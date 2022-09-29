<template>

    <body>
        <AddTask @display-card="addCards"/>
        <h2>My Tasks</h2>
        <div class="container text-start">
            <div class="row align-items-center">
                <div class="col-2">
                    <div class="row">Quick Filters</div>
                    <!-- <Button @btn-click="$emit('toggle-add-task')" :text="'Quick Filters'" :color="'none'" /> -->

                </div>
                <div class="col-2">
                    <!-- <div class="row">UI</div> -->
                    <Button id="button1" @btn-click="quickFilters('UI')" :text="'UI'" />
                </div>
                <div class="col-2">
                    <!-- <div class="row">Testing</div> -->
                    <Button id="button2" @btn-click="quickFilters('TESTING')" :text="'TESTING'" />
                </div>
                <div class="col-2">
                    <Button id="button3" @btn-click="quickFilters('CORE')" :text="'CORE'" />

                </div>
                <div class="col-2">
                    <!-- <div class="row">Core</div> -->
                    <Button id="button4" @btn-click="quickFilters('RESET FILTERS')" :text="'RESET FILTERS'" />

                </div>
                <!-- <div class="col-2">
                    <Ticket />
                </div> -->
            </div>
        </div>
        <!-- <div class="container text-start" v-for="card in getCardsForSection('todoblocked')">
            <div>{{card}}</div>
        </div> -->
        <!-- <div>{{this.cards.filter((card) => card.status === 'todoblocked')}}</div> -->
        <div class="container text-start">
            <div class="row align-items-top">
                <div class="col">
                    <div class="row" id="progress1">To Do/Blocked</div>
                    <!-- <div class="card row">
                        <h3>Task Name</h3>
                        <p>Description</p>
                        <span>Tags</span>
                        <div class="story-points">
                            1
                        </div>
                    </div> -->
                    <div @click="editTask(card.id)" class="card row" :class="card.priority" data-bs-toggle="modal" data-bs-target="#popUpForEdit" :key="card.id" v-for="card in this.displayCards.filter((card) => card.status === 'todoblocked')">
                        <h3>{{card.taskName}}</h3>
                        <p>{{card.description}}</p>
                        <span class="tag" v-for="tag in card.tags">{{tag}}</span>
                        <div class="story-points">
                            {{card.storyPoints}}
                        </div>
                        
                        </div>

                </div>
                <div class="col">
                    <div class="row" id="progress2">In Progress</div>
                    <div @click="editTask(card.id)" class="card row" :class="card.priority" data-bs-toggle="modal" data-bs-target="#popUpForEdit" v-for="card in this.displayCards.filter((card) => card.status === 'inprogress')">
                        <h3>{{card.taskName}}</h3>
                        <p>{{card.description}}</p>
                        <span class="tag" v-for="tag in card.tags">{{tag}}</span>
                        <div class="story-points">
                            {{card.storyPoints}}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="row" id="progress3">Deployed</div>
                    <div @click="editTask(card.id)" class="card row" :class="card.priority" data-bs-toggle="modal" data-bs-target="#popUpForEdit" v-for="card in this.displayCards.filter((card) => card.status === 'deployed')">
                        <h3>{{card.taskName}}</h3>
                        <p>{{card.description}}</p>
                        <span class="tag" v-for="tag in card.tags">{{tag}}</span>
                        <div class="story-points">
                            {{card.storyPoints}}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="row" id="progress4">Done</div>
                    <div @click="editTask(card.id)" class="card row" :class="card.priority" data-bs-toggle="modal" data-bs-target="#popUpForEdit" v-for="card in this.displayCards.filter((card) => card.status === 'done')">
                        <h3>{{card.taskName}}</h3>
                        <p>{{card.description}}</p>
                        <span class="tag" v-for="tag in card.tags">{{tag}}</span>
                        <div class="story-points">
                            {{card.storyPoints}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <Edit v-if="showEdit" @delete-task="deleteCard" />     -->
        <div v-if="showEdit" class="modal fade" id="popUpForEdit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button 
        type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="deleteCard(this.editCardID)">
        Remove
        </button>
        <button type="button" class="btn btn-primary">Edit Task</button>
      </div>
    </div>
  </div>
</div>

    </body>
</template>

<style scoped lang="scss">
.col:not(:last-child) {
    margin-right: 10px;
}

.card {
    background: white;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 20px;

    &:not(:last-child) {
        margin-bottom: 10px;
    }

    &.critical{
        background-color:#ff6961;
    }
    &.high{
        background-color:#fdfd96;
    }
    &.medium{
        background-color:#ffb347;
    }
    &.low{
        background-color:#cff0cc;
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
    
}

h2 {
    margin-top: 15px;
    margin-left: 85px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: italic;
    text-transform: uppercase;
}

div.col-2{
    margin-top: 10px;
    margin-bottom: 15px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: x-large;
    text-transform: uppercase;
}

#progress1, #progress2, #progress3, #progress4{
    margin-top: 10px;
    margin-bottom: 15px;
    font-weight: bold;
    text-transform: uppercase;
}

#button1, #button2, #button3, #button4{
    text-transform: uppercase;
    width: 160px;
    box-shadow: 0px 10px rgb(255, 136, 25);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,231,0,1) 0%, rgba(255,102,0,1) 100%, rgba(90,255,0,1) 100%);
}
</style>

<script>
import Ticket from '@/components/Ticket.vue';
import Button from '@/components/Button.vue';
import AddTask from '@/components/addTask.vue';
import Edit from '@/components/popUpForEdit.vue';

import { ref } from 'vue';
export default {
    props:{
        cards : Array,
        // test : String
    },
    mounted(){
        this.displayCards = this.cards
        console.log(this.cards)
        console.log(this.displayCards)
        // console.log(this.test)
        // this.showEdit = false
            
    },
    components: {
        Ticket,
        Button,
        AddTask,
        Edit


    },
    
    methods: {
        getCardsForSection(status) {
            return this.cards.filter((card) => card.status === status);
        },
        // test() {
        //     console.log('test');
        // },
        quickFilters(filter) {
            // console.log(filter)
            // console.log(this.cards.filter((card) => card.tags.includes(filter)))
            // return this.cards.filter((card) => card.tags.includes(filter))
            const toLowerFilter = filter.toLowerCase()
            if(toLowerFilter!= 'reset filters'){
                this.displayCards=this.cards.filter((card) => card.tags.map(a=>a.toLowerCase()).includes(toLowerFilter))
            }
            else{
                this.displayCards=this.cards
            }

            // console.log(this.displayCards)
        },
        addCards(card) {
            // this.cards = [...this.cards, ref(card)]
            this.cards.push(card)
            // console.log(this.cards)
            // this.$emit("add-card",card)

        },
        editTask(id){
            this.editCardID = id
            this.showEdit = !this.showEdit
            
        },
        deleteCard(id){
            // console.log("imhere")
            // console.log(id)
            this.cards = this.cards.filter((task)=> task.id !== id)
            this.displayCards= this.cards
            // console.log(id)
            // this.$emit("delete-card",id)
        }
        // const filter = quickFilters('UI')
    },
    data() {
        return {
            showEdit: false,
            editCardID: Number,
            displayCards:[] ,
        //     cards: [
        //         {
        //             id: 1,
        //             status: 'todoblocked',
        //             taskName: 'Task Name 1',
        //             description: 'Description 1',
        //             tags: ['CORE', 'UI'],
        //             storyPoints: 5,
        //             priority: 'low'
                    
        //         }, {
        //             id: 2,
        //             status: 'todoblocked',
        //             taskName: 'Task Name 2',
        //             description: 'Description 2',
        //             tags: ['CORE', 'UI'],
        //             storyPoints: 3,
        //             priority: 'high'
        //         }, {
        //             id: 3,
        //             status: 'inprogress',
        //             taskName: 'Task Name 3',
        //             description: 'Description 3',
        //             tags: ['CORE'],
        //             storyPoints: 2,
        //             priority: 'medium'
        //         }, {
        //             id: 6,
        //             status: 'inprogress',
        //             taskName: 'Task Name 6',
        //             description: 'Description 6',
        //             tags: ['CORE', 'UI'],
        //             storyPoints: 2,
        //             priority: 'critical'
        //         }, {
        //             id: 4,
        //             status: 'deployed',
        //             taskName: 'Task Name 4',
        //             description: 'Description 4',
        //             tags: ['CORE', 'UI'],
        //             storyPoints: 4,
        //             priority: 'low'
        //         }, {
        //             id: 5,
        //             status: 'done',
        //             taskName: 'Task Name 5',
        //             description: 'Description 5',
        //             tags: ['CORE', 'UI'],
        //             storyPoints: 5,
        //             priority: 'low'
        //         }
        //     ]
        }
    }
}
</script>