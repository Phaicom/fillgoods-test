import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { mutations, getters, state } from '@/store'
import Result from '@/components/result/Result'
import Search from '@/components/result/Search'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Result', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      mutations,
      getters,
      state,
    })
  })

  test('is a Vue instance', () => {
    const wrapper = shallowMount(Result, { store, localVue })
    expect(wrapper.vm).toBeTruthy()
  })

  test('it should call formatDate', () => {
    const wrapper = shallowMount(Result, {
      store,
      localVue,
    })
    let date = wrapper.vm.formatDate(1599847844323)
    expect(date).toEqual('12/09/2020 - 1:10:44')
  })

  test('it should call text', async () => {
    const wrapper = shallowMount(Search, { store, localVue })
    const input = wrapper.find('input')
    await input.setValue('11')

    expect(wrapper.vm.text).toEqual('11')
  })

  test('it should call filter', async () => {
    const wrapper = shallowMount(Search, { store, localVue })
    const select = wrapper.find('select')
    await select.setValue('B')

    expect(wrapper.vm.filter).toEqual('B')
  })
})
