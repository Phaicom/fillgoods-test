import { storiesOf } from '@storybook/vue'
import Navbar from '@/components/Navbar'

storiesOf('Header', module).add('Navbar', () => ({
  components: { Navbar },
  template: '<Navbar />',
}))
