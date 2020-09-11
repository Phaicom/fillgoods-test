import { storiesOf } from '@storybook/vue'
import Result from '@/components/result/Result'

storiesOf('Result', module).add('Result', () => ({
  components: { Result },
  template: '<Result />',
}))
