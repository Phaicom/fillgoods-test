  
import Vuex from 'vuex'

import axios from 'axios'

// import actions from '@/store/actions'

let store = new Vuex.Store({
  // actions: actions,
})

store.$axios = axios

export default store