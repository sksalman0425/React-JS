import logo from './logo.svg';
import './App.css';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function MyButton(){
  return(
    <button style={{border:'2px solid red'}}className='My-button'> This is my button</button>
  )
}

function Profile(){
 return (
  <>
  <h1>Name :{user.name}</h1>
  <img 
  src={user.imageUrl}
  style={{width: user.imageSize,height:user.imageSize}}
  alt={{}}
  />
  </>
 ) 
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Profile/>
      <MyButton/>
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

export default App;
