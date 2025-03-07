import { defineComponent } from 'vue'
import LoginCard from './components/LoginCard'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div class="container">
        <LoginCard />
      </div>
    )
  }
}) 