<template>
    <body>
        <AddSprintBoard :sprints="this.sprints" @display-sprint-board="addSprintBoards"/>
        <h2>My Sprints</h2>

        <div class="container">
            <Button :text = "'test'" />
        </div>
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
                this.sprints.push(sprintBoard)
            },

            onClickSprintBoard(id){
                this.onClickSprintBoardID = id
                this.showProductBacklog = !this.showProductBacklog
                
            },
        },

        data() {
            return {
                sprints : []
            }
        }
    }
</script>