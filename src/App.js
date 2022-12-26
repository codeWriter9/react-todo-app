import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';



function Welcome() {

  const[user, setUser] = useState(null);
  
  useEffect(() => {    // Update the document title using the browser API   
    if(user) {
      document.title = `Hi`;  
    } else {
      fetch('http://localhost:8080/employee/all')
      .then((resp)=>(resp.json()))
      //.then(txt=>console.log(txt[0].firstName))            
      .then(txt=>setUser(txt[0].firstName))            
    }
     
    }
  );
  
return (<b>Hi {user}! </b>);
  
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          <Welcome/>Let's Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
