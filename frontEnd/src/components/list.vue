<script>
import { actions } from '../store';

export default {
    vuex: {
        actions: actions,
        getters: {
            sessions: ({ sessions, filterKey }) => {
                let result = sessions.filter(session => session.user.name.includes(filterKey));
                return result;
            },
            currentId: ({ currentSessionId }) => currentSessionId
        }
    },
    methods: {
      generateRGB() {
        let o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ', 0.55)'
      }
    }
};
</script>

<template>
<div class="list">
    <ul>
        <li v-for="item in sessions"
          :class="{ active: item.id === currentId }"
          @click="selectSession(item.id)"
          :style="{ backgroundColor: generateRGB() }"
        >
            <img class="avatar"  width="30" height="30" :alt="item.user.name" :src="item.user.img">
            <p class="name">{{item.user.name}}</p>
        </li>
    </ul>
</div>
</template>

<style scoped lang="less">
@media (max-width: 500px) {
  .list {
    overflow: scroll;
    height: 72% !important;
  }
}
.list {
  overflow: scroll;
  height: 85%;
}
.list {
    li {
        padding: 12px 15px;
        border-bottom: 1px solid #292C33;
        cursor: pointer;
        transition: background-color .1s;

        &:hover {
            background-color: rgba(255, 255, 255, 0.03);
        }
        &.active {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
    .avatar, .name {
        vertical-align: middle;
    }
    .avatar {
        border-radius: 2px;
    }
    .name {
        display: inline-block;
        margin: 0 0 0 15px;
    }
}
</style>
