<script>

export default {
    vuex: {
        getters: {
            user: ({ user }) => user,
            session: ({ sessions, currentSessionId }) => sessions.find(session => session.id === currentSessionId)
        }
    },
    filters: {
        time (date) {
            if (typeof date === 'string') {
                date = new Date(date);
            }
            return date.getHours() + ':' + date.getMinutes();
        }
    },
    directives: {
        'scroll-bottom' () {
            this.vm.$nextTick(() => {
                this.el.scrollTop = this.el.scrollHeight - this.el.clientHeight;
            });
        }
    },
    created() {
        let bio002 = this.$pusher.subscribe('bio002');
        let bus001 = this.$pusher.subscribe('bus001');
        let math031 = this.$pusher.subscribe('math031');
        let econ002 = this.$pusher.subscribe('econ002');
        let compsci = this.$pusher.subscribe('compsci');
        let hackuci = this.$pusher.subscribe('hackuci');

        let context = this

        bio002.bind('bio002', function(data) {
          console.log(data.message);
          console.log(data.from);
          console.log(data.room);
          console.log(context.$store.state.currentSessionId)

          let session = context.$store.state.sessions.find(item => item.id === context.$store.state.currentSessionId)

          let imgLink = `https://api.adorable.io/avatars/100/${data.room}.png`
          session.messages.push({
            content: data.message,
            date: new Date(),
            name: data.room,
            img: imgLink
          })
        });

        bus001.bind('bus001', function(data) {
          console.log(data.message);
          console.log(data.from);
          console.log(data.room);
          console.log(context.$store.state.currentSessionId)

          let session = context.$store.state.sessions.find(item => item.id === context.$store.state.currentSessionId)

          let imgLink = `https://api.adorable.io/avatars/100/${data.room}.png`
          session.messages.push({
            content: data.message,
            date: new Date(),
            name: data.room,
            img: imgLink
          })
        });

        math031.bind('math031', function(data) {
          console.log(data.message);
          console.log(data.from);
          console.log(data.room);
          console.log(context.$store.state.currentSessionId)

          let session = context.$store.state.sessions.find(item => item.id === context.$store.state.currentSessionId)

          let imgLink = `https://api.adorable.io/avatars/100/${data.room}.png`
          session.messages.push({
            content: data.message,
            date: new Date(),
            name: data.room,
            img: imgLink
          })
        });

        econ002.bind('econ002', function(data) {
          console.log(data.message);
          console.log(data.from);
          console.log(data.room);
          console.log(context.$store.state.currentSessionId)

          let session = context.$store.state.sessions.find(item => item.id === context.$store.state.currentSessionId)

          let imgLink = `https://api.adorable.io/avatars/100/${data.room}.png`
          session.messages.push({
            content: data.message,
            date: new Date(),
            name: data.room,
            img: imgLink
          })
        });

        compsci.bind('compsci', function(data) {
          console.log(data.message);
          console.log(data.from);
          console.log(data.room);
          console.log(context.$store.state.currentSessionId)

          let session = context.$store.state.sessions.find(item => item.id === context.$store.state.currentSessionId)

          let imgLink = `https://api.adorable.io/avatars/100/${data.room}.png`
          session.messages.push({
            content: data.message,
            date: new Date(),
            name: data.room,
            img: imgLink
          })
        });

        hackuci.bind('hackuci', function(data) {
          console.log(data.message);
          console.log(data.from);
          console.log(data.room);
          console.log(context.$store.state.currentSessionId)

          let session = context.$store.state.sessions.find(item => item.id === context.$store.state.currentSessionId)

          let imgLink = `https://api.adorable.io/avatars/100/${data.room}.png`
          session.messages.push({
            content: data.message,
            date: new Date(),
            name: data.room,
            img: imgLink
          })
        });
    }
};
</script>

<template>
<div class="message" v-scroll-bottom="session.messages">
    <ul v-if="session.messages.length > 0">
        <li v-for="item in session.messages">
            <p class="time">
                <span>{{ item.date | time }}</span>
            </p>
            <div class="main" :class="{ self: item.name == $store.state.user.name }">
              <div><small class="userName">{{ !item.self ? item.name : $store.state.user.name }}</small></div>
                <img class="avatar" width="30" height="30" :src="item.img" />
                <div class="text">{{ item.content }}</div>
            </div>
        </li>
    </ul>
    <span v-else><center><h1>{{ session.user.name }} has no messages</center></span>
</div>
</template>

<style lang="less" scoped>
  .userName {
    color: gray;
  }
  @media (max-width: 500px) {
    .message {
      height: ~'calc(100% - 75px)' !important;
    }
  }
  .message {
      padding: 10px 15px;
      overflow-y: scroll;

      li {
          margin-bottom: 15px;
      }
      .time {
          margin: 7px 0;
          text-align: center;

          > span {
              display: inline-block;
              padding: 0 18px;
              font-size: 12px;
              color: #fff;
              border-radius: 2px;
              background-color: #dcdcdc;
          }
      }
      .avatar {
          float: left;
          margin: 0 10px 0 0;
          border-radius: 3px;
      }
      .text {
          display: inline-block;
          position: relative;
          padding: 0 10px;
          max-width: ~'calc(100% - 40px)';
          min-height: 30px;
          line-height: 2.5;
          font-size: 12px;
          text-align: left;
          word-break: break-all;
          background-color: #fafafa;
          border-radius: 4px;

          &:before {
              content: " ";
              position: absolute;
              top: 9px;
              right: 100%;
              border: 6px solid transparent;
              border-right-color: #fafafa;
          }
      }

      .self {
          text-align: right;
          color: white;

          .avatar {
              float: right;
              margin: 0 0 0 10px;
          }
          .text {
              background-color: #F36869;

              &:before {
                  right: inherit;
                  left: 100%;
                  border-right-color: transparent;
                  border-left-color: #F36869;
              }
          }
      }
  }
</style>
