import './App.css'
import { useCounterStore } from './store'

function App() {
  const [count] = useCounterStore(state => [state.count])

  return <OtherComponent count={count} />
}

const OtherComponent = ({ count }: { count: number }) => {
  return <div>{count}</div>
}

export default App
