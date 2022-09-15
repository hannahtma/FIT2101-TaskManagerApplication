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
                    <Button @btn-click="quickFilters('UI')" :text="'UI'" :color="'none'" />
                </div>
                <div class="col-2">
                    <!-- <div class="row">Testing</div> -->
                    <Button @btn-click="quickFilters('TESTING')" :text="'TESTING'" :color="'none'" />
                </div>
                <div class="col-2">
                    <Button @btn-click="quickFilters('CORE')" :text="'CORE'" :color="'none'" />

                </div>
                <div class="col-2">
                    <!-- <div class="row">Core</div> -->
                    <Button @btn-click="quickFilters('RESET FILTERS')" :text="'RESET FILTERS'" :color="'none'" />

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
                    <div class="row">To Do/Blocked</div>
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
                    <div class="row">In Progress</div>
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
                    <div class="row">Deployed</div>
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
                    <div class="row">Done</div>
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
</style>

<script>
import Ticket from '@/components/Ticket.vue';
import Button from '@/components/Button.vue';
import AddTask from '@/components/addTask.vue';
import Edit from '@/components/popUpForEdit.vue';

import { ref } from 'vue';
export default {
    props:{

    },
    mounted(){
        this.displayCards = this.cards
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
        test() {
            console.log('test');
        },
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

        },
        editTask(id){
            this.editCardID = id
            this.showEdit = !this.showEdit
        },
        deleteCard(id){
            console.log("imhere")
            console.log(id)
            this.cards = this.cards.filter((task)=> task.id !== id)
            this.displayCards= this.cards
            // console.log(id)
        }
        // const filter = quickFilters('UI')
    },
    data() {
        return {
            showEdit: false,
            editCardID: Number,
            displayCards:[] ,
            cards: [
                {
                    id: 1,
                    status: 'todoblocked',
                    taskName: 'Create button',
                    description: 'Description 1',
                    tags: ['CORE', 'UI'],
                    storyPoints: 5,
                    priority: 'low'
                    
                }, {
                    id: 2,
                    status: 'todoblocked',
                    taskName: 'Create slider',
                    description: 'Description 2',
                    tags: ['CORE', 'UI'],
                    storyPoints: 3,
                    priority: 'high'
                }, {
                    id: 3,
                    status: 'inprogress',
                    taskName: 'Task Name 3',
                    description: 'Description 3',
                    tags: ['CORE'],
                    storyPoints: 2,
                    priority: 'medium'
                }, {
                    id: 6,
                    status: 'inprogress',
                    taskName: 'Task Name 3',
                    description: 'Description 3',
                    tags: ['CORE', 'UI'],
                    storyPoints: 2,
                    priority: 'critical'
                }, {
                    id: 4,
                    status: 'deployed',
                    taskName: 'Task Name 4',
                    description: 'Description 4',
                    tags: ['CORE', 'UI'],
                    storyPoints: 4,
                    priority: 'low'
                }, {
                    id: 5,
                    status: 'done',
                    taskName: 'Task Name 5',
                    description: 'Description 5',
                    tags: ['CORE', 'UI'],
                    storyPoints: 5,
                    priority: 'low'
                }
            ]
        }
    }
}
</script>