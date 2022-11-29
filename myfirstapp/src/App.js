
import { useState } from 'react';
import './App.css';

//  function customButton(props){
//   console.log(" props object properties i.e args passed by CustomButtom::",props,props.name,props.count);
// return(<button>{props.name}</button>);//html tag
//  }
//child component i.e. Button
 function Button (props) {
  // const [counter,setCounter]=useState(0);
  // const onCounterButtonClick=()=>{setCounter(counter+1)};// we storing refernce of function in variable
  //here only onClick is inbuilt function
  //handleclick is user/custom arrow function
  const handleclick=()=>{
    props.onClickHandler(props.increment)
  }
  return (
    //if we put below button in div tag then after every button div include enter bz div is block level element
    // and every button comes in new line
      <button onClick={handleclick}>+{props.increment}</button>
  
  )
 }
 //child component i.e. Display
 function Display(props){
  return(
    <div>
      {props.message}
    </div>
  )

 }
 //parent component
function App() {
  const [counter,setCounter]=useState(0);//we shift state into parent component. 
 //below we formed inrementCounter function in parent component which update counter variable 
 //and data or event passes from parent to child component by props object.
  const inrementCounter=(incrementValue)=>{
    console.log("counter",counter);
    setCounter(counter+incrementValue)};
  return(

  <div>
    {/* you can javascript code in tag within {} */}
    {/* <CustomButton name={"Azhar"} count={0}></CustomButton>..
     Below we formed custom tags like Button, Display 
     and by same name we formed callback function(which are self invoke) i.e. child element as above */}
    
    <Button onClickHandler={inrementCounter}increment={1}></Button>
    <Button onClickHandler={inrementCounter}increment={5}></Button>
    <Button onClickHandler={inrementCounter}increment={10}></Button>
    <Button onClickHandler={inrementCounter}increment={15}></Button>
    <Button onClickHandler={inrementCounter}increment={20}></Button>
    <Button onClickHandler={inrementCounter}increment={25}></Button>
    <Display message={counter}></Display>
  </div>
  );
  }

export default App;
