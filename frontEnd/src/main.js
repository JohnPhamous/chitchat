import 'babel-polyfill';

import Vue from 'vue';
import App from './App';
import store from './store';
import Pusher from 'pusher-js';

Vue.use(require('vue-pusher'), {
    api_key: '284d7fd1588fa41cc42c',
    options: {
        cluster: 'us2',
        encrypted: true,
    }
});

Vue.config.devtools = true;

new Vue({
    el: 'body',
    components: { App },
    store: store
});
