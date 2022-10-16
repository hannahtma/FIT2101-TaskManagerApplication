<template>
    <body>
        <AddSprintBoard :sprints="this.sprints" @display-sprint-board="addSprintBoards"/>
        <h2>My Sprints</h2>

        <div class="container" v-for="sprint in this.sprints">
            <button class="btn btn-primary me-md-2 " @click="goToProductBacklog" :id="sprint.id" :clickSprint="this.clickSprint" >
                {{sprint.sprintName}}
                Start Date : {{sprint.startDate}}
                End Date : {{sprint.endDate}}
            </button>
           
            
        </div>
    </body>
</template>

<script>
    import Button from '@/components/Button.vue';
    import AddSprintBoard from '@/components/addSprintBoard.vue';
import ProductBacklogVue from './ProductBacklog.vue';
    

    export default {
        props:{
            sprints: Array,
        },
        mounted(){
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

            onClickSprintBoard(id){
                this.onClickSprintBoardID = id
                this.showProductBacklog = !this.showProductBacklog
                
            },
            goToProductBacklog(){
                this.$router.push({
                    path: '/productbacklog',
                    component : ProductBacklogVue,
                    props: {clickSprint : true}
                })
            }
           
        },

        data() {
            return {
                // sprints : [],
                clickSprint :true
                

            }
        }
    }
</script>