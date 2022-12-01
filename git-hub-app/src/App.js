import React from 'react';
import './App.css';

// function App() {
//   return (
//     <div>
//     <div className="header">
//       The Git Hub App
//     </div>
//     </div>
//   );
// }
//we can write class component as

  const testData = [
    { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
    { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
    { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
  ];
  const CardList = (props) => {
    return (
      <div>
        {
          props.profiles.map((profile) => {
            return <Card profile={profile} />
          })
        }
      </div>
    )
  }
  const Form =(props)=>{
    return(
      <div>
        <form action="">
          <input type={"text"} placeholder="Enter github username"/>
          <button>add Profile Card</button>
        </form>
      </div>
    )
  }
  class Card extends React.Component {
    render() {
      const profile = this.props.profile
      return (
        <div style={{ margin: "1rem" }}>
          <img src={profile.avatar_url} style={{ width: "75px" }} />
          <div style={{ display: "inline-block", marginLeft: "12px" }}>
            <div style={{ fontSize: "125%" }}>{profile.name}</div>
            <div>{profile.company}</div>
          </div>
        </div>
      )
    }
  }
  class App extends React.Component {
    render() {
      return (
        <div>
          <div className='header'>
            The Git Hub App
          </div>
          <Form/>
          <CardList profiles={testData}/>
        </div>
      );
    }
  }
  //profiles and profile are two different state i.e. variable.
  export default App;