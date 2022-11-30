import React from 'react';
import './App.scss';

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
			{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  		{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
	];

class Card extends React.Component{
  rendet(){
    return(
      <div className="github-profile">
        <img src='https://dummyimage.com/75x75/000/fff'></img>
        <div></div>
        <div ></div>
        ........card details
      </div>
    )
  }
}


class App extends React.Component{
  render(){
    return(
      <div>
        <div className="header"> 
           The Git Hub App 
         </div>
         <Card/>
    </div>
    );
  }
}

export default App;
