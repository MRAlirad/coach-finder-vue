import { createStore } from "vuex";
import coacherModule from './modules/coaches/index.js'

const store = createStore({
    modules: {
        coaches: coacherModule
    },
    state(){
        return {
            userId: 'c3',
        };
    },
    getters: {
        userId(state){
            return state.userId;
        }
    }
});

export default store;