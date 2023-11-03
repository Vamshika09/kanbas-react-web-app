import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./AddEvent";
import Counter from "./SetCounter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariables";
import ObjectStateVariable from "./ObjectStateVariables";
import ArrayStateVariable from "./ArrayStateVariables";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples.js";

function Assignment4() {
  function sayHello() {
    alert("Hello");
  }
    return (
      <div className="container">
        <h1>Assignment 4</h1>
        <Add a={1} b={2}/>
        <ClickEvent/>
        <PassingDataOnEvent />
        <PassingFunctions theFunction={sayHello}/>
        <EventObject />
        <Counter />
        <BooleanStateVariables />
        <StringStateVariables />
        <DateStateVariable />
        <ObjectStateVariable />
        <ArrayStateVariable />
        <ParentStateComponent />
        <ReduxExamples />
      </div>
    );
  }
  export default Assignment4;