import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { Profile } from "./Profile";
// when default keyword is not written in Profile.js file then we have to write export before Profile component and user object.
//(no need to write export before user when you are using it in same proj/module).
//same way we write for {useState,useEffect} function bz they are not bydafault export function
//import Profile from './Profile';
// remember we can also write import Profile123 from './Profile'
//because we have written default keyword during exporting of Profile
// if we have not written default then we have to write excact name in {}.
import { ShoppingList } from "./ShoppingList";

function MyButton() {
  const [showProfile, setshowProfile] = useState(false);

  const handleClick = () => {
    // alert("Button Clicked");
    setshowProfile(true);
  };
  const handleHideClick = () => {
    setshowProfile(false);
  };
  return (
    <>
      <button
        onClick={handleClick}
        style={{ border: "2px solid red" }}
        className="My-button"
      >
        Click here to showProfile
      </button>
      <button onClick={handleHideClick}>Click here to hide profile</button>
      {showProfile && <Profile />}
    </>
  );
}
function MyProjectBody() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile />
        <MyButton />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
//below in return fun we write js code in {} i.e. ternary operator.
// for displaying MyProjectBody component makes isAdmin variable value true.
function App() {
  const isAdmin = false;
  return <>
  <ShoppingList/>
  {isAdmin ? <MyProjectBody /> : <MyButton />}
  </>;
}

export default App;
