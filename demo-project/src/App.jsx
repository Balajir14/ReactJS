import Limit from './components/Limit';
import LimitHook from './components/LimitHook';
import Loading from './components/Loading';
import NewForm from './components/NewForm';
import NewHook from './components/NewHook';

function Greeting ({name, age, message}) {
  // const {name, age} = props;
  return(
    <>
      <h2>Welcome {name}, My age is {age}: {message} </h2>
    </>
  )
}

function App() {
  return (
    <>
    <Greeting name="john" />
    <Loading isLoading="true" />
    </>
  )
}

export default App
