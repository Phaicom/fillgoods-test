import Vuex from 'vuex'

import axios from 'axios'

import { getters, mutations, state } from '@/store'

let store = new Vuex.Store({
  getters,
  mutations,
  state,
})

store.$axios = axios

export default store
