import { storiesOf } from '@storybook/vue'
import Result from '@/components/result/Result'
import Search from '@/components/result/Search'

storiesOf('Result', module).add('Result', () => ({
  components: { Result },
  template: '<Result />',
})).add('Search', () => ({
  components: { Search },
  template: '<Search />',
}))
