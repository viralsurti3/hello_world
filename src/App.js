import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greetings';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Message></Message>

        <Counter></Counter>

        {/* <Greet name="veeral S."></Greet>
        <Welcome name="veeral S2"></Welcome> */}
      </header>
    </div>
  );
}

export default App;
