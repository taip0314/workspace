import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: function () {
            return {
                message: 'This is store message!',
                subMessage: 'Counter',
                counter: 0,
            };
        },
        mutations: {
            count: function (state, obj) {
                state.message = obj.message;
                state.counter += obj.add;
            },
            reset: function (state, obj) {
                state.message = obj.message;
                state.counter = 0;
            }
        }
    })
}

export default createStore