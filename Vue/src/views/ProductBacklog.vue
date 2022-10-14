<template>
    <body>
        <AddCardToProductBacklog :cards="this.productBacklog" @display-card-in-product-backlog="addTaskCardToProductBacklog"/>
        
        <div class="container text-start">
            <div class="row align-items-top" >
                <div class="col">
                    <!-- <div class="row" id="progress3">Deployed</div> -->
                    <div @click="onClickCardInProductBacklog(card.id)" class="card row" :class="card.id" data-bs-toggle="modal" data-bs-target="#cardPopupProductBacklog" v-for="card in this.productBacklog">
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
                    <div @click="onClickCardInSprintBacklog(card.id)" class="card row" :class="card.id" data-bs-toggle="modal" data-bs-target="#cardPopupSprintBacklog" v-for="card in this.sprintBacklog">
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
    
        <div class="modal fade" id="cardPopupProductBacklog" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#logTimeAndDate" >Log Time and Date</button>
                </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="cardPopupInSprintBacklog" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                </div>
            </div>
        </div>

        <div class="modal fade" id="logTimeAndDate" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

<script>
    import Button from '@/components/Button.vue';
    import AddCardToProductBacklog from '@/components/addCardToProductBacklog.vue';
    import AddTask from '@/components/addTask.vue';

    export default{
        props: {
            cards: Array
        },

        mounted(){
            if (localStorage.getItem("cards")){
                this.productBacklog = JSON.parse(localStorage.getItem("cards"))
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
                this.showCardInProductBacklog = !this.showCardInProductBacklog
                this.selectedCard = this.productBacklog.find((card)=>card.id ===id)
                console.log(this.productBacklog)
                console.log(this.productBacklog.find((card)=>card.id ===id))
                // this.$emit("edit-card",id)
            },

            displaySprintBacklog(card) {
                this.$emit("add-card",card)
            },

            onClickCardInSprintBacklog(id){
                this.cardId = id
                this.showCardInSprintBacklog = !this.showCardInSprintBacklog
                this.selectedCard = this.sprintBacklog.find((card)=>card.id ===id)
                console.log(this.sprintBacklog)
                console.log(this.sprintBacklog.find((card)=>card.id ===id))
                // this.$emit("edit-card",id)
            },

        },

        data() {
            return {
                productBacklog: [],
                showCardInProductBacklog: false,
                selectedCard:{},
                sprintBacklog: [],

            }
        }
    }

</script>

<style scoped lang="scss">
//     nav.navbar.navbar-expand-sm {
//     background-color: #ec746c;
// }

// ul.navbar-nav {
//     position: relative;
//     left: 30px;
// }

// #navbarDropdown,
// #navbarDropdown2,
// #navbarDropdown3,
// #navLink {
//     font-weight: 500;
//     text-transform: uppercase;
// }

// a.nav-link.active {
//     color: white;
// }

// a.navbar-brand {
//     color: black;
//     position: relative;
//     left: 20px;
//     top: -1px;
//     font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
//     font-style: italic;
// }
// a.navbar-brand:hover {
//     color: black;
// }

// a.dropdown-item {
//     color: white;
// }

// div.dropdown-menu {
//     background-color: black;
// }

// #createId {
//     position: relative;
//     left: 120px;
//     background-color: black;
//     text-transform: uppercase;
//     font-size: smaller;
//     top: 2.5px;
// }

// div.card {
//     margin-left: 10px;
//     margin-top: 10px;
// }

// .btn-primary {
//     background-color: #ec746c;
// }

// /* ----------------------------- */

// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }

// body {
//     background-color: white;
//     font-family: "Roboto", Helvetica, sans-serif;
// }

// .app {
//     display: flex;
//     flex-flow: column;

//     width: 100vw;
//     height: 100vh;
// }

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
    margin: 4px 0px;
}

// .product-backlog {
//     background: white;
//     box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
//     border-radius: 10px;
//     padding: 20px;

//     &:not(:last-child) {
//         margin-bottom: 10px;
//     }

//     &.critical{
//         background-color:#ff6961;
//     }
//     &.high{
//         background-color:#fdfd96;
//     }
//     &.medium{
//         background-color:#ffb347;
//     }
//     &.low{
//         background-color:#cff0cc;
//     }

//     .tag {
//         background: #01819A;
//         color: white;
//         font-size: 0.75rem;
//         padding: 5px 15px;
//         border-radius: 5px;
//         display: inline-block;

//         &:not(:last-child) {
//             margin-bottom: 3px;
//         }
//     }
//     p{
//         margin-bottom: 0px;
//     }
    
// }

</style>