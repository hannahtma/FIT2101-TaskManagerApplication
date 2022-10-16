<template>
    <body>
        
    <AddCardToProductBacklog :cards="this.productBacklog" @display-card-in-product-backlog="addTaskCardToProductBacklog"/>
        <div class="container text-start">
            <div class="row align-items-top" >
                <div class="col" @drop="onDrop($event, 'product')" @dragover.prevent @dragenter.prevent>
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
                    <div @click="onClickCardInSprintBacklog(card.id)" class="card row" :class="card.priority" data-bs-toggle="modal" data-bs-target="#cardPopupSprintBacklog" v-for="card in this.sprintBacklog"
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
                        <div>Time: {{card.time}}</div>
                    </div>  
                </div>
            </div>        
        </div>
    
        <div class="modal fade" id="cardPopupSprintBacklog" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

        <div class="modal fade" id="logTimeAndDate" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Log Time and Date</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form id="myForm">
                    <div class="mb-3">
                    <label for="task-title" class="col-form-label">Enter time:</label>
                    <input type="text" class="form-control" id="accumulated-time" placeholder="Enter hours here" v-model="accumulatedTime" />
                    </div>                
                </form>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary btn-danger" data-bs-dismiss="modal">
                    Cancel
                </button>
                <button type="button" class="btn btn-primary" data-toggle="modal" id="button-save" data-bs-dismiss="modal" @click="addTimeToCard(this.onClickCardID)">
                    Add Time
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
            id: Number //this is for the sprint length
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

            if (localStorage.getItem("cards")){
                this.productBacklog = JSON.parse(localStorage.getItem("cards"))
                // console.log(this.productBacklog)
            }
            if (localStorage.getItem("sprint"+this.id)){
                this.sprintBacklog = JSON.parse(localStorage.getItem("sprint"+this.id))
                console.log(this.sprintBacklog)
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

            onClickCardInSprintBacklog(id){
                this.cardId = id
                // this.showCardInSprintBacklog = !this.showCardInSprintBacklog
                this.selectedCard = this.sprintBacklog.find((card)=>card.id ===id)
                console.log(this.sprintBacklog)
                console.log(this.sprintBacklog.find((card)=>card.id ===id))
                // this.$emit("edit-card",id)        
                },
            
            addTimeToCard(id) {
                const index = this.sprintBacklog.findIndex((task)=>task.id ===id)
                let newTime = document.getElementById('accumulated-time')
                console.log(newTime)

                card.time = newTime
                console.log(card)
                this.$emit("time",index,card)
                this.sprintBacklog[index] = card
            },

            startDrag(event, card) {
                console.log(card)
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
                    console.log(this.sprintBacklog)
                    this.sprintBacklog = this.sprintBacklog.filter((card)=> card!==returnCard)
                    console.log(this.sprintBacklog)
                    localStorage.setItem("cards", JSON.stringify(this.productBacklog))
                    this.productBacklog.push(returnCard)
                    this.$emit('on-drop-add',returnCard)

                }
                localStorage.setItem("cards", JSON.stringify(this.productBacklog))
                localStorage.setItem("sprint"+this.id, JSON.stringify(this.sprintBacklog))
                
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
//         background-color:#ffb347;
//     }
//     &.medium{
//         background-color:#fdfd96;
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