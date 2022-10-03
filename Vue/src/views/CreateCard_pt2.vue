<template>
    <section>
    <div class="color"></div>
    <select class="selectColor" @change="changeColor">
        <option value="#ff6961">Critical</option>
        <option value="#fdfd96">High</option>
        <option value="#ffb347">Medium</option>
        <option value="#cff0cc">Low</option>
    </select>
</section>
</template>

<script>

    export default {
        mounted(){},
        methods:{
            changeColor(event){
                console.log(event)
        let color = document.querySelector('.color');
        let selectColor = event.target.value;
        color.style.background = selectColor;}
        }

    }
</script>

<style scoped>
    section{
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.color{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    background: #e6746c;
}

.selectColor{
    position: relative;
    padding: 10px;
    border-radius: 4px;
    border: none;
    outline: none;
    width: 200px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
}
</style>