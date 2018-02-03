import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const now = new Date();
const store = new Vuex.Store({
    state: {
        user: {
            name: 'Kangy',
            img: 'data:image/png;base64,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cpzXaufDUzW4zAF6klUim7QqyipRS1pjz2m586GBBJcxQG+ySoyWFkBWiRrSGnM+650PCzS4TAF6lFVisLSAskqUltbQc3nofEhUBJchwDIL0TxCyyqxe/2dNyez9qvOop21X6Fllbj4/uUX9+bNIy3C8tL5cKgKbmSAJWT12s39l0p87kPZvdH8uIu0JrP2q90bzY/R513ktZv7L5WQVt9zeOp8KFQGNyJA77JKbJOWRlklSkirz/29dT4MqoMbGGAEWSXWSUuzrBK5pdX1vh47HwITwQ0IMIqsEsvSsiCrRE5pdbmf1867x1RwPQOMJKtEkpYlWSVySWvbfTx33jUmg+sR4Kjiz9rPL95ovl8ri5zsza78dG925afocwzh4o3m+2MfFb3p3/feebeYDq5jgKO/wpo1s5qZ5GB3On1mMm/vTObtnd3p9Bn0efqyN2tmpb7CitB5l7gIrkOAOb4fYklaSVbp7NaklUNW64QVpfPucBXclgCzCMuItJZlZU1auWS1SliROu8Kl8FtCDCbsJRLa52srEgrp6yWhRWt825wHdyaALMKS6m0tslKu7Ryy2pRWBE774IQwa0IMLuwlElrZzp9tousFqW1M50+iz53ooSskrCidt48oYJbCrCIsObt6WTW/Aad65msmo96n33efKRBWpNZ85tS+UTuPDrX0Rwc378L/zAB18Hx/bulFgItraGy0iKtkrLam7enkTuPyjQbkf9rU3IpUNIaKyu0tErLil9hOSBUgKW/hwWUVi5ZoaRVQ1Z7c34PywUhAiz9U0KgtHLLqra0askqCUskZudd4TrA0r+HBZTW3uzKcyVktSitvdmV50qdv6asFoUlEq/z7nAZYOnfdO8urd/lzutMVu3Hxc8+bz8uIa3JrPld7RyWzxCp8y5xFWDpvyUESquWrEpJCyGrVcISidN5t7gIsPTTGoDSqi2r3NJCyWqdsERidN41pgMs/TwsoLRQssolLaSsNglLxH/n3WMywGpPHK0vLbSsxkoLLattwhLx3fkQmAqw+jPd60nr/LWr5zTIalFa569dPdf1/Bpk1UVYIn47HwYTAcLemjPymjW/33bW89euntubtZ/Az/qts7efdJHW3qz5PfysPYQl4rPzoVAdIPy9hOWkpVZWHaWlSVZ9hOWx8+FQGaCaNz/nl5Z6WW2RljZZ9RWWt86H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'
        },
        sessions: [
            {
                id: 1,
                user: {
                    name: '#biology',
                    img: '#'
                },
                messages: [
                    {
                        content: 'Lorem pi alpha hello lol',
                        date: now
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
                    img: '#'
                },
                messages: []
            },
            {
                id: 2,
                user: {
                    name: '#business',
                    img: '#'
                },
                messages: []
            },
            {
                id: 3,
                user: {
                  name: '#econ',
                  img: '#',
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
