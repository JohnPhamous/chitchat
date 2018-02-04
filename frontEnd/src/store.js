import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const now = new Date();
const store = new Vuex.Store({
    state: {
        isMin: false,
        user: {
            name: '',
            img: 'https://camo.githubusercontent.com/71a2984595019e4d4641e831f389d4f6f1cf6fb8/687474703a2f2f73776479682e6769746875622e696f2f7175696c742f73616d706c652f7175696c742d30332e706e67'
        },
        sessions: [
            {
                id: 1,
                user: {
                    name: 'bio002',
                    img: 'https://api.adorable.io/avatars/100/biology.png'
                },
                messages: [
                    {
                        content: 'What did yall get for number 1?',
                        date: now,
                        name: 'Flappy',
                        img: 'https://api.adorable.io/avatars/100/biology.png',
                        abc: 'Hello'
                    }, {
                        content: 'What is the genus for this animal?',
                        date: now,
                        img: 'https://api.adorable.io/avatars/100/biology.png',
                        name: 'Flappy'
                    }
                ]
            },
            {
                id: 2,
                user: {
                    name: 'bus001',
                    img: 'https://api.adorable.io/avatars/100/business.png'
                },
                messages: []
            },
            {
                id: 3,
                user: {
                    name: 'math031',
                    img: 'https://api.adorable.io/avatars/100/math.png'
                },
                messages: []
            },
            {
                id: 4,
                user: {
                  name: 'econ002',
                  img: 'https://api.adorable.io/avatars/100/econ.png',
                },
                messages: []
            }
        ],
        currentSessionId: 0,
        currentSessionName: '',
        filterKey: ''
    },
    mutations: {
        INIT_DATA (state) {
            let data = localStorage.getItem('vue-chat-session');
            if (data) {
                state.sessions = JSON.parse(data);
            }
        },
        SEND_MESSAGE ({ sessions, currentSessionId, user }, content) {
            let session = sessions.find(item => item.id === currentSessionId);
            console.log(user.from)
            session.messages.push({
                content: content,
                date: new Date(),
                name: user.from,
            });
        },
        SELECT_SESSION (state, id) {
            state.currentSessionId = id;
            let roomName = state.sessions.find(item => item.id == id);
            state.currentSessionName = roomName.user.name;
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
