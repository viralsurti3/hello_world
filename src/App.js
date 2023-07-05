import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greetings';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <Message></Message> */}
        {/* <Counter></Counter> */}

        {/* <Greet name="veeral S."></Greet> */}
        {/* <Welcome name="veeral S2"></Welcome> */}
        {/* <ClassClick></ClassClick> */}
    <ConditionalRendering></ConditionalRendering>
        <EventBind></EventBind>

        <ParentComponent></ParentComponent>
      </header>
    </div>
  );
}

export default App;
