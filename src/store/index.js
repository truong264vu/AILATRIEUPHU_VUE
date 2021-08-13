import Vuex from 'vuex'
import Vue from 'vue'
import getters from './getters.js'
import state from './state.js'
import mutations from './mutations.js'

Vue.use(Vuex)

const storeData = {
        state,
        getters,
        mutations
          
}


const store = new Vuex.Store(storeData)
export default store