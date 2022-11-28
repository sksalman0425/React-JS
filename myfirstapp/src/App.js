
import { useState } from 'react';
import './App.css';

//  function customButton(props){
//   console.log(" props object properties i.e args passed by CustomButtom::",props,props.name,props.count);
// return(<button>{props.name}</button>);//html tag
//  }

 function Button () {
  const [counter,setCounter]=useState(0);
  const onCounterButtonClick=()=>{setCounter(counter+1)};// we storing refernce of function in variable
  return (
    <div>
      <button onClick={onCounterButtonClick}>{counter}</button>
    </div>
  )
 }
function App() {

  return(
  <div>
    {/* you can javascript code in tag within {} */}
    {/* <CustomButton name={"Azhar"} count={0}></CustomButton> */}
    <Button></Button>

  </div>);
  }

export default App;
