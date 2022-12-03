import React, { useState } from 'react';
import './App.npmcss';
import axios from 'axios';

const Card = (props) => {

  return (
    <div style={{ margin: "1rem" }}>
      <img src={props.profile.avatar_url} style={{ width: "75px"}} />
      <div style={{ display: "inline-block", marginLeft: "12px" }}>
        <div style={{ fontSize: "125%" }}>{props.profile.name}</div>
        <div>{props.profile.company}</div>
      </div>
    </div>
  )
};

const CardList = (props) => {
  return (
    <>
      {
        props.profiles.map((item) => {
          return (
            <Card profile={item} />
          )
        })
      }
    </>
  )
}


const Form = (props) => {
  const [userName, setUserName] = useState("");
  const handleInputChange = (event) => {
    // userName=event.target.value;
    setUserName(event.target.value)

  }
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    debugger;
    const response = await axios.get(`https://api.github.com/users/${userName} `);
    console.log("response from github api", response.data);
    props.addNewProfile(response.data)
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type={"text"}
        placeholder="Enter github username"
        value={userName}
        onChange={handleInputChange}
        required />
      <button > Add Profile Card</button>
    </form>
  )
}
const App = () => {
  const [profiles, setProfiles] = useState([]);
  const addNewProfile = (newProfile) => {
    console.log("New data from APi::", newProfile);
    setProfiles([...profiles, newProfile])
  }
  return (
    <div>
      <div className='header'>
        The Github App
      </div>
      <Form addNewProfile={addNewProfile} />
      <CardList profiles={profiles} />

    </div>
  )

}

export default App;

