import { mount } from '@vue/test-utils'
import Calculator from '@/components/calculator/Calculator'

describe('Calculator', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Calculator)
    expect(wrapper.vm).toBeTruthy()
  })

  test('it should call add', () => {
    const wrapper = mount(Calculator, {})
    wrapper.vm.add('1')
    wrapper.vm.add('+')
    wrapper.vm.add('-')
    wrapper.vm.add('2')
    expect(wrapper.vm.expr).toEqual('1+2')
  })

  test('it should call clear', () => {
    const wrapper = mount(Calculator, {
      data() {
        return {
          expr: '1+3',
          result: '4',
        }
      },
    })
    wrapper.vm.clear()
    expect(wrapper.vm.expr).toEqual('')
    expect(wrapper.vm.result).toEqual('')
  })

  test('it should call calculate', async () => {
    const wrapper = mount(Calculator, {
      data() {
        return {
          expr: '1+3*8-24',
        }
      },
    })
    await wrapper.vm.calculate()
    expect(wrapper.vm.result).toEqual('1')

    wrapper.vm.clear()
    wrapper.vm.expr = '1+3+'
    await wrapper.vm.calculate()
    expect(wrapper.vm.result).toEqual('')
  })
})
