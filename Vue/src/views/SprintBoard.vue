<template>
    <body>
        <AddSprintBoard :sprints="this.sprints" @display-sprint-board="addSprintBoards"/>
        <h2>My Sprints</h2>
    </body>
</template>

<script>
    import Button from '@/components/Button.vue';
    import AddSprintBoard from '@/components/addSprintBoard.vue';

    import { ref } from 'vue';

    export default {
        components: {
            Button,
            AddSprintBoard,
        },

        methods: {
            addSprintBoards(sprintBoard) {
                this.$emit("add-sprint-board",sprintBoard)
                this.displaySprintBoards=this.sprints
            },

            onClickSprintBoard(id){
                this.onClickSprintBoardID = id
                this.showProductBacklog = !this.showProductBacklog
                
            },
        },

        data() {
            return {
                displaySprintBoards: [],
            }
        }
    }
</script>