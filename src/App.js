import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloMessage from './components/Hello';
import { Functional } from './components/Functional';
import ClassType from './components/Classtype';
import StateExample from './components/stateExample';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import Conditional from './components/Conditional';
import ListRender from './components/ListRender';
import Stylesheet from './components/Stylesheet';
import FormComponent from './components/formComponent';
import LifeCycleA from './components/LifeCycleA';
import Table from './components/fragments/table';
import ParentComp from './components/PureComponent/ParentComponent';
import RefComponent from './components/Refs/RefComponent';
import ClickedCounter from './components/HigherOrder/ClickedCounter';
import HoverCounter from './components/HigherOrder/HoverCounter';
import BasicProps from './components/RenderProps/BasicProps';
import ClickedCounterTwo from './components/RenderProps/ClickedCounterTwo';
import HoverCounterTwo from './components/RenderProps/HoverCounterTwo';
import Counter from './components/RenderProps/Counter';

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
      {/* <ListRender /> */}
      {/* <Stylesheet /> */}
      {/* <FormComponent /> */}
      {/* <LifeCycleA name="fromParent" /> */}
      {/* <Table></Table> */}
      {/* <ParentComp /> */}
      {/* <RefComponent /> */}
      {/* <ClickedCounter />
      <HoverCounter /> */}
      {/* <BasicProps name={(isLoggedIn) => isLoggedIn ? 'Rajkumar' : 'Guest'} /> */}
      <Counter render={(count, incrementCounter) => <ClickedCounterTwo count={count} incrementCounter={incrementCounter}></ClickedCounterTwo>} />
      <Counter render={(count, incrementCounter) => <HoverCounterTwo count={count} incrementCounter={incrementCounter}></HoverCounterTwo>} />

    </div>
  );
}

export default App;
