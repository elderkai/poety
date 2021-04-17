import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Vue from 'vue'
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
      data:{

      }
    },
    mutations:{
        'CHANGE_DATA'(state,payload){
            state.data=payload
        }
    },
    actions:{   

    },plugins:[createPersistedState({
        storage:{
            getItem:key=>sessionStorage.getItem(key),
            setItem:(key,value)=>
                sessionStorage.setItem(key,value),
            removeItem:key=>sessionStorage.removeItem(key),
        }
    })]
})
export default store