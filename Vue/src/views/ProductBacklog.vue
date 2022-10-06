<template>
    <body>
        <AddCardToProductBacklog :cards="this.cards" @display-card-in-product-backlog="addTaskCardToProductBacklog"/>
        <div class="app">
            <div class="lists">
                <div class="list">
                    <div class="list">
                        <!-- <div class="row" id="progress3">Deployed</div> -->
                    <div class="product backlog row" :class="card.id" v-for="card in this.productBacklog">
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
                <div class="list"></div>
            </div>
        </div>
    </body>
</template>    

<script>
    import Button from '@/components/Button.vue';
    import AddCardToProductBacklog from '@/components/addCardToProductBacklog.vue';

    export default{
        props: {
            cards: Array
        },

        mounted(){
            // let i = 0
            // while (localStorage.getItem(i) !== null) {
            //     this.productBacklog.push(localStorage.getItem(i))
            //     console.log("i",JSON.parse(localStorage.getItem(i)))
            //     i ++
            // }

            if (localStorage.getItem("cards")){
                this.productBacklog = JSON.parse(localStorage.getItem("cards"))
            }
            console.log("here")
            console.log(this.cards)
            this.productBacklog = this.cards
            // this.productBacklog = this.cards
            
            console.log("this.productBacklog",this.productBacklog)

        },

        components: {
            Button,
            AddCardToProductBacklog,
        },

        methods: {
            displayProductBacklog(card) {
                this.$emit("add-card",card)
                this.productBacklog = this.cards
                // this.productBacklog = this.cards
                
            },

            showCardInProductBacklog(id){
                this.cardId = id
                this.showEdit = !this.showEdit
                this.selectedCard = this.cards.find((card)=>card.id ===id)
                // this.$emit("edit-card",id)
                
            },
        },

        data() {
            return {
                productBacklog: [],
                displayProductBacklog(card) {
                    this.$emit("add-card",card)
                    this.productBacklog = this.cards
                    // this.productBacklog = this.cards
                    console.log(this.cards.length)
                    console.log("product backlog? ",this.cards)
                    for (let i = 0; i < 1000; i++) {
                        this.productBacklog.push(localStorage.getItem(i))
                    }
                    console.log(this.cards)
                    
                },
            }
        }
    }

</script>

<style>
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

</style>