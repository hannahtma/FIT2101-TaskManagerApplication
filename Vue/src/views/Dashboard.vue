<template>
    <h2>My Tasks</h2>
    <div class="container text-start">
        <div class="row align-items-center">
            <div class="col-2">
                <div class="row">Quick Filters</div>
            </div>
            <div class="col-2">
                <div class="row">UI</div>
            </div>
            <div class="col-2">
                <div class="row">Testing</div>
            </div>
            <div class="col-2">
                <div class="row">Core</div>
            </div>
            <div class="col-2">
                <Ticket />
            </div>
        </div>
    </div>
    <!-- <div class="container text-start" v-for="card in getCardsForSection('todoblocked')">
        <div>{{card}}</div>
    </div> -->
    <!-- <div>{{this.cards.filter((card) => card.status === 'todoblocked')}}</div> -->
    <div class="container text-start">
        <div class="row align-items-top">
            <div class="col">
                <div class="row">To Do/Blocked</div>
                <!-- <div class="card row">
                    <h3>Task Name</h3>
                    <p>Description</p>
                    <span>Tags</span>
                    <div class="story-points">
                        1
                    </div>
                </div> -->
                <div class="card row" v-for="card in this.cards.filter((card) => card.status === 'todoblocked')">
                    <h3>{{card.taskName}}</h3>
                    <p>{{card.description}}</p>
                    <span class="tag" v-for="tag in card.tags">{{tag}}</span>
                    <div class="story-points">
                        {{card.storyPoints}}
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row">In Progress</div>
                <div class="card row" v-for="card in this.cards.filter((card) => card.status === 'inprogress')">
                    <h3>{{card.taskName}}</h3>
                    <p>{{card.description}}</p>
                    <span class="tag" v-for="tag in card.tags">{{tag}}</span>
                    <div class="story-points">
                        {{card.storyPoints}}
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row">Deployed</div>
                <div class="card row" v-for="card in this.cards.filter((card) => card.status === 'deployed')">
                    <h3>{{card.taskName}}</h3>
                    <p>{{card.description}}</p>
                    <span class="tag" v-for="tag in card.tags">{{tag}}</span>
                    <div class="story-points">
                        {{card.storyPoints}}
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row">Done</div>
                <div class="card row" v-for="card in this.cards.filter((card) => card.status === 'done')">
                    <h3>{{card.taskName}}</h3>
                    <p>{{card.description}}</p>
                    <span class="tag" v-for="tag in card.tags">{{tag}}</span>
                    <div class="story-points">
                        {{card.storyPoints}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.col:not(:last-child) {
    margin-right: 10px;
}

.card {
    background: white;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 20px;

    &:not(:last-child) {
        margin-bottom: 10px;
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
}
</style>

<script>
import Ticket from '@/components/Ticket.vue';

export default {
    components: {
        Ticket,
    },
    method: {
        getCardsForSection(status) {
            return this.cards.filter((card) => card.status === status);
        },
        test() {
            console.log('test');
        }
    },
    data() {
        return {
            cons: console,
            cards: [
                {
                    id: 1,
                    status: 'todoblocked',
                    taskName: 'Create button',
                    descrption: 'Description 1',
                    tags: ['CORE', 'UI'],
                    storyPoints: 5
                }, {
                    id: 2,
                    status: 'todoblocked',
                    taskName: 'Create slider',
                    descrption: 'Description 2',
                    tags: ['CORE', 'UI'],
                    storyPoints: 3
                }, {
                    id: 3,
                    status: 'inprogress',
                    taskName: 'Task Name 3',
                    descrption: 'Description 3',
                    tags: ['CORE'],
                    storyPoints: 2
                }, {
                    id: 6,
                    status: 'inprogress',
                    taskName: 'Task Name 3',
                    descrption: 'Description 3',
                    tags: ['CORE', 'UI'],
                    storyPoints: 2
                }, {
                    id: 4,
                    status: 'deployed',
                    taskName: 'Task Name 4',
                    descrption: 'Description 4',
                    tags: ['CORE', 'UI'],
                    storyPoints: 4
                }, {
                    id: 5,
                    status: 'done',
                    taskName: 'Task Name 5',
                    descrption: 'Description 5',
                    tags: ['CORE', 'UI'],
                    storyPoints: 5
                }
            ]
        }
    }
}
</script>