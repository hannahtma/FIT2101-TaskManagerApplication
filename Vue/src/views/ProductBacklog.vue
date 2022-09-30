<template>

</template>

<script>
    export default {
        props: {
            cards: Array,
        },

        mounted() {
            this.productBacklogCards = this.cards
        },

        methods: {
            getCardsForProductBacklog() {
                return this.cards;
            },
        },

        data() {
            return {
                productBacklogCards: [],
            }
        }
    }
</script>
