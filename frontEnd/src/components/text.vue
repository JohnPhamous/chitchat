<script>
import { actions } from '../store';
import axios from 'axios'

export default {
    vuex: {
        actions: actions
    },
    data () {
        return {
            content: ''
        };
    },
    methods: {
        onKeyup (e) {
            if (e.keyCode === 13 && this.content.length) {
              console.log(this.content)
              console.log(this.$store.state.user.name)
              console.log(this.$store.state.currentSessionName)

              axios.get(`http://localhost:3000/api/${this.content}/${this.$store.state.user.name}/${this.$store.state.currentSessionName}`)
                .then(response => {
                  console.log(response.data)
                })
                .catch(e => {
                  console.log(e)
                })
                this.content = '';
            }
        },
    }
};
</script>

<template>
<div class="text">
    <textarea class="userMessage" placeholder="Enter a message!" v-model="content" @keyup="onKeyup"></textarea>
</div>
</template>

<style lang="less" scoped>
.send-button {
  position: absolute;
  right: 0px;
  padding: 25px 25px;
  height: 100%;
}
.userMessage {
  font-size: 1rem;
  color: white;
  border-radius: 30px;
  top: 10px;
}

@media (max-width: 500px) {
  .text {
    height: 75px !important;
  }
}
.text {
    height: 70px;
    border-top: solid 1px #ddd;

    textarea {
        padding: 10px;
        height: 30pt;
        width: 100%;
        border: none;
        outline: none;
        resize: none;
        background-color: white;
        color: gray;
    }
}
</style>
