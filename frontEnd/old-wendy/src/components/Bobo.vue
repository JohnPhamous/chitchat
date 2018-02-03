<template>
    <div class = "test">
        <!-- <h1>Hello from Bobo</h1> -->
        <h1>{{ appName }}</h1>
        <!-- <h1 v-for="i in 10" :key="i">{{ i }}</h1> -->
        <input type="text" v-model="title" class="f"><br />
        <h1>{{title}}</h1>
        <button v-on:click = "greet('Question Sent')">Send</button>
    </div>
</template>

<script>
export default {
    data: function() {
       return {
            appName: "Que",
            userName: "Papa John"
       }
    },
    methods: {
        greet: function(greeting){
            alert(greeting);
        }
    }
}
</script>

<style>
button{
    border: 1px solid black;
    border-radius: 5px;
    background: rgba(0,0,0,0);
}
f{
    border: 1px solid black;
    border-radius: 5px;
    background: rgba(0,0,0,0);
}
</style>
