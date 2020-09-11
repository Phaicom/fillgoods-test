import { storiesOf } from '@storybook/vue'
import Calculator from '@/components/calculator/Calculator'

storiesOf('Calculator', module).add('Calculator', () => ({
  components: { Calculator },
  template: '<Calculator />',
}))
