import { createStore } from "vuex";
import coacherModule from './modules/coaches/index.js'

const store = createStore({
    modules: {
        coaches: coacherModule
    }
});

export default store;