<template>

    <body>
        <AddTask :cards="this.cards" @display-card="addCards"/>
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
                    <!-- <div class="row" id="progress1">To Do/Blocked</div> -->
                    <!-- <div class="card row">
                        <h3>Task Name</h3>
                        <p>Description</p>
                        <span>Tags</span>
                        <div class="story-points">
                            1
                        </div>
                    </div> -->
                    <div @click="onClickCard(card.id)" class="card row" :class="card.priority" data-bs-toggle="modal" data-bs-target="#popUpForEdit" :key="card.id" v-for="card in this.displayCards.filter((card) => card.status === 'To Do/Blocked')">
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
                <div class="col">
                    <!-- <div class="row" id="progress2">In Progress</div> -->
                    <div @click="onClickCard(card.id)" class="card row" :class="card.priority" data-bs-toggle="modal" data-bs-target="#popUpForEdit" v-for="card in this.displayCards.filter((card) => card.status === 'In Progress')">
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
                <div class="col">
                    <!-- <div class="row" id="progress3">Deployed</div> -->
                    <div @click="onClickCard(card.id)" class="card row" :class="card.priority" data-bs-toggle="modal" data-bs-target="#popUpForEdit" v-for="card in this.displayCards.filter((card) => card.status === 'Deployed')">
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
                <div class="col">
                    <!-- <div class="row" id="progress4">Done</div> -->
                    <div @click="onClickCard(card.id)" class="card row" :class="card.priority" data-bs-toggle="modal" data-bs-target="#popUpForEdit" v-for="card in this.displayCards.filter((card) => card.status === 'Done')">
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
            </div>
        </div>
        <!-- <Edit v-if="showEdit" @delete-task="deleteCard" />     -->
        <div v-if="showEdit" class="modal fade" id="popUpForEdit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{this.selectedCard.taskName}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Description: {{this.selectedCard.description}}</p>
        <div>Status: {{this.selectedCard.status}}</div>
        <div>Type: {{this.selectedCard.type}}</div>
        <div class="story-points">
            {{this.selectedCard.storyPoints}}
        </div>
        <div>Assigned To: {{this.selectedCard.assign}}</div>
        <span class="tag" v-for="tag in this.selectedCard.tags">{{tag}}</span>
      </div>
      <div class="modal-footer">
        <button 
        type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="deleteCard(this.onClickCardID)">
        Remove
        </button>
        <button type="button" class="btn btn-primary"  data-bs-toggle="modal"
            data-bs-target="#editCard">Edit Task</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="editCard" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Task Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="myForm">
            <div class="mb-3">
              <label for="task-title" class="col-form-label">Task Title:</label>
              <input type="text" class="form-control" id="edit-title" placeholder="Enter task title here" v-model="editTitle" />
            </div>
            <div class="mb-3">
              <label for="task-desc" class="col-form-label">Task Description:</label>
              <textarea class="form-control" id="edit-desc" placeholder="Enter task description here"></textarea>
            </div>
            <div class="mb-3">
              <label for="task-status" class="col-form-label">Status:</label>
              <br />
              <select class="status" id="edit-status">
                <option value="To Do/Blocked">To Do/Blocked</option>
                <option value="In Progress">In Progress</option>
                <option value="Deployed">Deployed</option>
                <option value="Done">Done</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="story-points" class="col-form-label">Story Points (between 1 and 10):</label>
              <input type="number" class="form-control" id="edit-story-point" placeholder="Enter story points here" min="1" max="10">
            </div>
            <div class="mb-3">
              <label for="task-tags" class="col-form-label">Task Tag:</label>
              <br />
              <select class="tag" id="edit-tag">
                <option value="UI">UI</option>
                <option value="CORE">Core</option>
                <option value="Testing">Testing</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="task-type" class="col-form-label">Task Type:</label>
              <br />
              <select class="type" id="edit-type">
                <option value="Bug">Bug</option>
                <option value="Story">Story</option>
              </select>
            </div>
            <div class="color">
              <label for="task-priority" class="col-form-label">Task Priority:</label>
              <br />
              <select class="priority" id="edit-priority" >
                <option value="critical">Critical</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <div class="mb-3">
              <label for="task-assign" class="col-form-label">Assigned to:</label>
              <br />
              <select class="assign" id="edit-assign">
                <option value="Dion">Dion</option>
                <option value="Hannah">Hannah</option>
                <option value="Lohan">Lohan</option>
                <option value="Taha">Taha</option>
                <option value="Rameez">Rameez</option>
              </select>
            </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-danger" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary" data-toggle="modal" id="button-save" data-bs-dismiss="modal" @click="editTaskCard(this.onClickCardID)">
            Confirm Changes
          </button>
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

.modal-body{
    p{
        margin-bottom: 0px;
    }
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
    p{
        margin-bottom: 0px;
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

<script >
import Button from '@/components/Button.vue';
import AddTask from '@/components/addTask.vue';

import { ref } from 'vue';
// const editTitle = ref('')
export default {
    props:{
        cards : Array,
        // test : String
    },
    watch: {
        cards: {
            handler(){
                localStorage.setItem("cards", JSON.stringify(this.displayCards))
            },
            deep: true
        }
        
        // for (let i = 0; i < this.displayCards.length; i++) {
        
        // console.log(this.displayCards[i])
        // }
    },
    mounted(){
        this.displayCards = this.cards
        // for (let i = 0; i < this.displayCards.length; i++) {
        //     localStorage.setItem(this.displayCards[i].id, JSON.stringify(this.displayCards[i]))
        //     console.log(this.displayCards[i])
        // }
        // console.log(this.cards)
        // console.log(this.displayCards)
        // console.log(this.test)
        // this.showEdit = false
            
    },
    components: {
        Button,
        AddTask,
        


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
            // this.cards.push(card)
            // console.log(this.cards)
            this.$emit("add-card",card)
            this.displayCards=this.cards


        },
        onClickCard(id){
            this.onClickCardID = id
            this.showEdit = !this.showEdit
            this.selectedCard = this.cards.find((card)=>card.id ===id)
            // this.$emit("edit-card",id)
            
        },
        deleteCard(id){
            // console.log("imhere")
            // console.log(id)
            // this.cards = this.cards.filter((task)=> task.id !== id)
            // this.displayCards= this.cards
            // console.log(id)
            if(confirm('Are you sure?')){
                this.$emit("delete-card",id)
            this.displayCards= this.cards.filter((task)=> task.id !== id)
            }

        },
        editTaskCard(id){
            // console.log("edit",id)
            console.log(this.editTitle)
            const index = this.cards.findIndex((task)=>task.id ===id)

            let newTitle = document.getElementById("edit-title").value;
            let newDesc = document.getElementById("edit-desc").value;
            let storyPoint = document.getElementById('edit-story-point').value;
            let status = document.getElementById('edit-status').value;
            let tag = document.getElementById('edit-tag').value;
            let type = document.getElementById('edit-type').value;
            let assign = document.getElementById('edit-assign').value;
            let priority = document.getElementById('edit-priority').value;

            // console.log("newtitle",newTitle)

            let card = {

                id: id,
                taskName: newTitle,
                description: newDesc,
                status: status,
                storyPoints: storyPoint,
                tags: [tag],
                type:type,
                priority: priority,
                assign:assign

                }
            this.$emit("edit-card",index,card)
            this.displayCards[index] = card
            // console.log(this.displayCards)

        }
        // const filter = quickFilters('UI')
    },
//     computed: {
//   computedWidth: {
//     get(){
//       return this.width
//     },
//     set(newValue) {
//       this.$emit('widthChanged', newValue)
//     }
//   },
    data() {
        return {
            showEdit: false,
            onClickCardID: 0,
            displayCards:[] ,
            editTitle: "" ,
            selectedCard:{},

        
        }
    }
}
</script>