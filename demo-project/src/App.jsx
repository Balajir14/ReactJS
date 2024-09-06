import './App.css'
import Counter from './components/Counter'
import SimpleList from './components/SimpleList'
import Toggle from './components/Toggle'
import User from './components/User'

function Greeting () {
  return(
    <>
      <h2>Welcome...</h2>
    </>
  )
}

function App() {
  return (
    <>
      {/* <h1>Hello World!</h1> */}
      {/* <Greeting /> */}
      {/* <Counter /> */}
      {/* <Toggle /> */}
      {/* <User /> */}
      <SimpleList />
    </>
  )
}

export default App
