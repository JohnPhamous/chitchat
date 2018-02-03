<script>
import { actions } from './store';

import Card from 'components/card';
import List from 'components/list';
import Text from 'components/text';
import Message from 'components/message';
import appButton from 'components/button';

export default {
    components: { Card, List, Text, Message, appButton },
    vuex: {
        actions: actions
    },
    created () {
        this.initData();
    },
    methods: {
      toggleSideAction() {
        console.log('hi')
        console.log(this.$store.state.isMin)
      }
    }
}
</script>

<template>
<div id="app">
    <div class="sidebar">
        <!--<span @click="toggleSideAction" class="toggleSide fa fa-2x fa-bars"></span>-->
        <card></card>
        <list></list>
        <app-button></app-button>

    </div>
    <div class="main">
        <message></message>
        <text></text>
    </div>
</div>
</template>

<style lang="less" scoped>
@media (max-width: 500px) {
  .sidebar {
    width: 100px !important;
    text-align: center;
  }
  .name {
    margin: 0 !important;
  }
  .btn {
    position: relative !important;
  }
}
.toggleSide {
  float: right;
  top: 18px;
  position: relative;
  margin-right: 10px;
  cursor: pointer;

}
#app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 3px;

    .sidebar, .main {
        height: 100%;
    }
    .sidebar {
        float: left;
        width: 200px;
        color: #f4f4f4;
        background-color: #2e3238;
    }
    .main {
        position: relative;
        overflow: hidden;
        background-color: #eee;
    }
    .text {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        padding: 15px 10px;
    }
    .message {
        height: ~'calc(100% - 160px)';
    }
}
</style>
