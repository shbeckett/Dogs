import logo from './logo.svg';
import Profile from './components/Profile';
import Favourite from './components/Favourite';
import Game from './components/Game';
import Fashion from './components/Fashion';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';



function App() {
  const [favourite, setFavourite] = useState("");
 
 

  return (
    <div className="App">
      <header className="App-header">
        
        <div>
          Here are some fabulous pooches.
          <table>
            <tr>
              <td>
                <Profile name="Doug" age="13" />
                <button onClick={() => setFavourite("Doug")}>Doug is my favourite</button>
              </td>
              <td>
                <Profile name="Odie" age="2"/>
                <button onClick={() => setFavourite("Odie")}>I prefer Odie</button>
              </td>
            </tr>        
          </table>
        </div>
        <div>
          <Favourite name={favourite}/>
        </div>
        <div>
          <Game />
        </div>
        <div>
          <Fashion name={favourite}/>
        </div>
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
