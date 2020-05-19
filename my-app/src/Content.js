import React from 'react';
import './Content.css';
import ReactDOM from 'react-dom';

function Contents(props) {
  return (
    <div className="CommEle">
      <div>textcode:{props.text}</div>
      <div>is name：{props.name}</div>
      <button className="App-button">onClickComponent</button>
       <Button />
    </div>
  )
}


function Button(){
  return (
    Button,
    <button className="btn-test">btnTest</button>
  )
}

function timesComp() {
  const Tick = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  return Tick
}

setInterval(timesComp, 1000);



export default Contents;