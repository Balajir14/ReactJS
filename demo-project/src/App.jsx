// import './App.css'
import Form from './components/Form';

function Greeting ({name, age, message}) {
  // const {name, age} = props;
  return(
    <>
      <h2>Welcome {name}, My age is {age}: {message} </h2>
    </>
  )
}

function App() {
  const name = "John";
  const age = "10";
  const message = "This is my new meesage"
  return (
    <>
      {/* <Greeting name={name} age={age} message={message} /> */}
      <Form />
    </>
  )
}

export default App
