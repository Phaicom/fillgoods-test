import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { mutations, getters, state } from '@/store'
import index from '@/pages/index'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('index', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      mutations,
      getters,
      state,
    })
  })

  test('is a Vue instance', () => {
    const wrapper = shallowMount(index, { store, localVue })
    expect(wrapper.vm).toBeTruthy()
  })
})
