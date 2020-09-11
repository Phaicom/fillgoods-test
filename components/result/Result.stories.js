import { storiesOf } from '@storybook/vue'
import store from '@/.storybook/store'
import Result from '@/components/result/Result'
import Search from '@/components/result/Search'

storiesOf('Result', module)
  .add('Result', () => ({
    components: { Result },
    store: store,
    template: '<Result />',
  }))
  .add('Search', () => ({
    components: { Search },
    store: store,
    template: '<Search />',
  }))
