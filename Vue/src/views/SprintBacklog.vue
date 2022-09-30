<template>
</template>

<script>
    export default {
        props: {
            cards: Array,
        },

        mounted() {
            this.sprintBacklogCards = this.cards
        },

        methods: {
            getCardsForSprintBacklog() {
                return this.cards;
            },
        },
        
        data() {
            return {
                sprintBacklogCards: [],
            }
        }
    }
</script>
