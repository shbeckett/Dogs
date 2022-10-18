import Profile from './components/Profile';
import Favourite from './components/Favourite';
import Game from './components/Game';
import Fashion from './components/Fashion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';



function App() {
  const [favourite, setFavourite] = useState("");
 
 

  return (
    <div className="App">
      <header className="App-header">
            <h1>Two Heroic Hounds</h1>
          
             <table>
              <tr>
                  <td>
                    <Profile name="Doug" age="13" />
                <button onClick={() => setFavourite("Doug")}>Doug is my favourite</button>
                <br/>
                <br/>
                  </td>
                  <td>Which<br/>one<br/>
                     will<br/>you<br/>
                      choose?<br/><br/><br/><br/><br/></td>
                  <td>
                <Profile name="Odie" age="2"/>
                <button onClick={() => setFavourite("Odie")}>I prefer Odie</button>
                <br/>
                <br/>
                  </td>
                </tr>
              </table>  
      
        <div>
          {favourite &&
          <Favourite name={favourite}/>
          }
        </div>
        <div>
          <Game />
        </div>
        <div>
          {favourite &&
          <Fashion name={favourite}/>
          }
        </div>
        
        </header>
    </div>
  );
}

export default App;
