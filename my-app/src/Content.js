import React from 'react';
import './Content.css';

function Contents(props) {
  return (
    <div className="CommEle">
      <div>textcode:{props.text}</div>
      <div>is name：{props.name}</div>
      <button className="App-button">onClickComponent</button>
       <Button />
       <Clock times = {new Date().toLocaleTimeString()} />
    </div>
  )
}


function Button(){
  return (
    Button,
    <button className="btn-test">btnTest</button>
  )
}

// function DateTimes() {
//   Clock
// }
class Clock extends React.Component {
  render() {
  // const times = new Date().toLocaleTimeString();
    return (
      <div>
        <h2> Clock times</h2>
        <div>{this.props.times}.</div>
      </div>
    )
  }
}
setInterval(Clock, 1000)



export default Contents;