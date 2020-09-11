import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { mutations, getters, state } from '@/store'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      mutations,
      getters,
      state,
    })
  })

  test('it should call getSearchResults getters', () => {
    store.commit('add', {
      expr: '6+9',
      result: '15',
      name: 'A',
      date: 1599849646459,
    })
    store.commit('add', {
      expr: '8+9',
      result: '17',
      name: 'B',
      date: 1599849639882,
    })

    expect(store.state.results.length).toEqual(2)

    store.commit('updateSearch', {
      text: '1',
      filter: 'A',
    })
    expect(store.getters.getSearchResults.length).toBe(1)

    store.commit('updateSearch', {
      text: '1',
      filter: 'All',
    })
    expect(store.getters.getSearchResults.length).toBe(2)

    store.commit('clear')
    expect(store.getters.getSearchResults.length).toBe(0)
  })
})
