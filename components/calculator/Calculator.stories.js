import { storiesOf } from '@storybook/vue'
import Calculator from '@/components/calculator/Calculator'
import Monitor from '@/components/calculator/Monitor'

storiesOf('Calculator', module)
  .add('Calculator', () => ({
    components: { Calculator },
    template: '<Calculator />',
  }))
  .add('Monitor', () => ({
    components: { Monitor },
    template: '<Monitor />',
  }))
