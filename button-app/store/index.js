import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
const createStore = () => {
    return new Vuex.Store({
        state: function () {
            return {
                message: 'This is store message!',
                counter: 0,
            };
        },
        mutations: {
            doit: function (state) {
                //0~9のランダムな数字を生成
                var n = Math.floor(Math.random() * 10);

                //storeのcounterにnを加算
                state.counter += n;
                state.message = 'add' + n + '.';
            },
            reset: function (state) {
                state.counter = 0;
                state.message = "reset now.";
            },
        },
        plugins: [
            createPersistedState(),
        ],
    })
}

export default createStore