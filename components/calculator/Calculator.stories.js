import { storiesOf } from '@storybook/vue'
import store from '@/.storybook/store'
import Calculator from '@/components/calculator/Calculator'
import Monitor from '@/components/calculator/Monitor'

storiesOf('Calculator', module)
  .add('Calculator', () => ({
    components: { Calculator },
    store: store,
    template: '<Calculator />',
  }))
  .add('Monitor', () => ({
    components: { Monitor },
    template: '<Monitor />',
  }))
