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
                    img: 'data:image/png;base64,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'
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
                    img: 'data:image/png;base64,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'
                },
                messages: []
            },
            {
                id: 2,
                name: '#econ',
                img: '#',
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
