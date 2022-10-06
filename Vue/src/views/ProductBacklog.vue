<template>
    <body>
        <AddCardToProductBacklog :cards="this.productBacklog" @display-card-in-product-backlog="addTaskCardToProductBacklog"/>

        <div 
            class="drop-zone1"
            @drop="onDrop($event, 1)"
            @dragenetr.prevent
            @dragover.prevent
        >
            <div 
                @click="onClickCardInProductBacklog(card.id)"
                v-for="card in listOne"
                :key="card.id"
                :class="card.id" 
                class="product-backlog row"
                draggable="true"
                @dragstart="startDrag($event, card)"
            >
                <h3>{{card.taskName}}</h3>
                    <p >Description: {{card.description}}</p>
                    <div>Status: {{card.status}}</div>
                    <div>Type: {{card.type}}</div>
                    <div class="story-points">
                        {{card.storyPoints}}
                    </div>
                    <div>Assigned To: {{card.assign}}</div>
                    <span class="tag" v-for="tag in card.tags">{{tag}}</span>
                </div>
        </div>

        <div 
            class="drop-zone2"
            @drop="onDrop($event, 2)"
            @dragenetr.prevent
            @dragover.prevent
        >
            <div 
                @click="onClickCardInProductBacklog(card.id)"
                v-for="card in listTwo" 
                :key="card.id"
                :class="card.id" 
                class="product-backlog row"
                draggable="true"
                @dragstart="startDrag($event, card)"
            >
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

            // showCardInProductBacklog(id){
            //     this.cardId = id
            //     this.showEdit = !this.showEdit
            //     this.selectedCard = this.cards.find((card)=>card.id ===id)
            //     // this.$emit("edit-card",id)
            // },
            startDrag(event, card) {
                console.log(card)
                event.dataTransfer.dropEffect = "move"
                event.dataTransfer.effectAllowed = "move"
                event.dataTransfer.setData("cardID", card.id)
            },

            onDrop(event, list) {
                var cardID = event.dataTransfer.getData("cardID")
                var card = localStorage.getItem((card) => card.id == cardID)
                card.list = list
            },

        },

        computed: {
            listOne: function () {
                return this.cards.filter(i => i.list === 1)
                },
            listTwo: function () {
                return this.cards.filter(i => i.list === 2)
                }
            },

        data() {
            return {
                productBacklog: [],
                // showEdit: false,
            }
        },

        
        
        
    }

</script>

<style scoped lang="scss">
    nav.navbar.navbar-expand-sm {
    background-color: #ec746c;
}

ul.navbar-nav {
    position: relative;
    left: 30px;
}

#navbarDropdown,
#navbarDropdown2,
#navbarDropdown3,
#navLink {
    font-weight: 500;
    text-transform: uppercase;
}

a.nav-link.active {
    color: white;
}

a.navbar-brand {
    color: black;
    position: relative;
    left: 20px;
    top: -1px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: italic;
}
a.navbar-brand:hover {
    color: black;
}

a.dropdown-item {
    color: white;
}

div.dropdown-menu {
    background-color: black;
}

#createId {
    position: relative;
    left: 120px;
    background-color: black;
    text-transform: uppercase;
    font-size: smaller;
    top: 2.5px;
}

div.card {
    margin-left: 10px;
    margin-top: 10px;
}

.btn-primary {
    background-color: #ec746c;
}

/* ----------------------------- */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #ffce00;
    font-family: "Roboto", Helvetica, sans-serif;
}

.app {
    display: flex;
    flex-flow: column;

    width: 100vw;
    height: 100vh;
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
    margin: 4px 0px;
}

.product-backlog {
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

.drop-zone1 {
  width: 500px;
  margin: 50px auto;
  background-color: rgb(201, 152, 197);
  padding: 10px;
  min-height: 10px;
}

.drop-zone2 {
  width: 500px;
  margin: 50px auto;
  background-color: rgb(201, 152, 197);
  padding: 10px;
  min-height: 10px;
}

.product-backlog {
  background-color: rgb(138, 105, 136);
  color: white;
  padding: 5px;
  margin-bottom: 10px;
}

.product-backlog:nth-last-of-type(1) {
  margin-bottom: 0;
}

</style>