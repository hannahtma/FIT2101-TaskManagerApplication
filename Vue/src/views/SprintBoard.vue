<template>
    <body>
        <AddSprintBoard :sprints="this.sprints" @display-sprint-board="addSprintBoards"/>
        <h2>My Sprints</h2>

        <div class="container" v-for="sprint in this.sprints">
            <RouterLink class="btn btn-primary me-md-2 " to="/productbacklog" :id="sprint.id">
                {{sprint.sprintName}}
                Start Date : {{sprint.startDate}}
                End Date : {{sprint.endDate}}
            </RouterLink>
           
            
        </div>
    </body>
</template>

<script>
    import Button from '@/components/Button.vue';
    import AddSprintBoard from '@/components/addSprintBoard.vue';
    

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
           
        },

        data() {
            return {
                // sprints : [],
                

            }
        }
    }
</script>