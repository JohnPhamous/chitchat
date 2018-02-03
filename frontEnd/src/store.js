import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const now = new Date();
const store = new Vuex.Store({
    state: {
        user: {
            name: 'Kangy',
            img: 'https://camo.githubusercontent.com/71a2984595019e4d4641e831f389d4f6f1cf6fb8/687474703a2f2f73776479682e6769746875622e696f2f7175696c742f73616d706c652f7175696c742d30332e706e67'
        },
        sessions: [
            {
                id: 1,
                user: {
                    name: '#biology',
                    img: 'http://identicon.net/img/identicon.png'
                },
                messages: [
                    {
                        content: 'Lorem pi alpha hello lol',
                        date: now,
                    }, {
                        content: 'LOL OKAY LETS GO',
                        date: now
                    }
                ]
            },
            {
                id: 2,
                user: {
                    name: '#business',
                    img: 'https://avatars3.githubusercontent.com/u/3490199?s=88&v=4'
                },
                messages: []
            },
            {
                id: 3,
                user: {
                    name: '#math',
                    img: 'https://raw.github.com/hashdog/node-identicon-github/master/examples/images/github.png'
                },
                messages: []
            },
            {
                id: 4,
                user: {
                  name: '#econ',
                  img: 'https://camo.githubusercontent.com/f8bb1bcef059d5fc71e96594fc9472a8e776e06c/68747470733a2f2f736967696c2e63757063616b652e696f2f536967696c',
                },
                messages: []
            }
        ],
        currentSessionId: 1,
        filterKey: ''
    },
    mutations: {
        INIT_DATA (state) {
            let data = localStorage.getItem('vue-chat-session');
            if (data) {
                state.sessions = JSON.parse(data);
            }
        },
        SEND_MESSAGE ({ sessions, currentSessionId }, content) {
            let session = sessions.find(item => item.id === currentSessionId);
            session.messages.push({
                content: content,
                date: new Date(),
                self: true
            });
        },
        SELECT_SESSION (state, id) {
            state.currentSessionId = id;
        } ,
        SET_FILTER_KEY (state, value) {
            state.filterKey = value;
        }
    }
});

store.watch(
    (state) => state.sessions,
    (val) => {
        console.log('CHANGE: ', val);
        localStorage.setItem('vue-chat-session', JSON.stringify(val));
    },
    {
        deep: true
    }
);

export default store;
export const actions = {
    initData: ({ dispatch }) => dispatch('INIT_DATA'),
    sendMessage: ({ dispatch }, content) => dispatch('SEND_MESSAGE', content),
    selectSession: ({ dispatch }, id) => dispatch('SELECT_SESSION', id),
    search: ({ dispatch }, value) => dispatch('SET_FILTER_KEY', value)
};
