import { useState } from "react";

function ButtonState() {
    // title is the variable
    // setTitle updates the state
    const [title, setTitle] = useState("");
    const [count, setCount] = useState(0);
  
    const Clicked = () => {
      setTitle("Hello");
    };
    const CountClicked = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
        <Data title = {title} count = {count}/>
        <button onClick={Clicked}>Update </button>
        <button onClick={CountClicked}>Count </button>
      </div>
    );
  }
  
  function Data(props) {
    return (
      <div>
        <p>Title: {props.title}</p>
        <p>Count: {props.count}</p>
      </div>
    );
  }
  

  export default ButtonState;
  // sets the default props:
  // CreateForm.defaultProps = {
  //   num: 5,
  //   text : "working"
  // }
  