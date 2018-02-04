<script>
import { actions } from '../store';

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
                this.sendMessage(this.content);
                this.content = '';
            }
        },
      send () {
        this.sendMessage(this.content);
        this.content = '';
      }
    }
};
</script>

<template>
<div class="text">
  <!--<button class="send-button" v-if="content.length" @click="send">-></button>-->
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
