import React from "react";
import './App.css';

import MyImg from './img/IMG_20190611_235038_925.jpg';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        
        <div className="Top">
          <div className="My-picture">
            <img className="MyImg" src={MyImg} alt="IMG_20190611_235038_925.jpg"/> 
          </div>
          <div className="Center">
            <div className="Center Name"> IN GEOL BAEK </div>
          </div>
        </div>

        <div className="cotent1">
          <p> next area </p>
        </div>
      </div>
    );
  }
}

export default App;
