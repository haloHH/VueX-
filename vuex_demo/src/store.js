import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
 
export default new Vuex.Store({
  state:{			//定义共享的数据
    count:0
  },
  mutations:{
    increment:state => state.count ++,
    decrement:state => state.count --,
  }
})