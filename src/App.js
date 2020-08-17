import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloMessage from './components/Hello';
import { Functional } from './components/Functional';
import ClassType from './components/Classtype';
import StateExample from './components/stateExample';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import Conditional from './components/Conditional';
import ListRender from './components/ListRender';

function App() {
  return (
    <div className="App">
      {/* <HelloMessage />
      <Functional name="Raj" surname="Kanase">
        <p>My full name.</p>
      </Functional>
      <ClassType name="Ishwari" surname="Kanase">
        <p>My sister's name.</p>
      </ClassType> */}
      {/* <StateExample></StateExample> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <ParentComponent /> */}
      {/* <Conditional /> */}
      <ListRender />
    </div>
  );
}

export default App;
