import React, { Component } from 'react';
import logo from './logo.svg';
import bullet from './bullet.svg'
import './App.css';

class App extends Component {

  render() {
     var myName = 'Andrew Mwiti';
     const sideLength = "300px";
     const myStyle = {
       margin: '40px',
       border: '5px solid pink'
     };

    const pics = {
      panda: "http://bit.ly/1Tqltv5",
      owl: "http://bit.ly/1XGtkM3",
      owlCat: "http://bit.ly/1Upbczi"
    }; 
    
    const panda = (
      <img 
        src={pics.panda} 
        alt="Lazy Panda"
        width={sideLength}
        height={sideLength} 
        style={myStyle}
        />
    );
    
    const owl = (
      <img 
        src={pics.owl} 
        alt="Unimpressed Owl"
        width={sideLength}
        height={sideLength} 
        style={myStyle}
        />
    );
    
    const owlCat = (
      <img 
        src={pics.owlCat} 
        alt="Ghastly Abomination"
        width={sideLength}
        height={sideLength} 
        style={myStyle}
        />
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Andrew doing React</h1>
        </header>
        <section>
          <div className="col">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam magni cumque fugit adipisci vel commodi! Eos 
              dolorum veritatis nulla adipisci neque et quasi eaque, ab, laborum ipsam sed illo!</p>
            <h1>hello {myName}</h1>
            <div>{owlCat}</div>
            <div>{panda}</div>
          </div>
          <div className="col">
            <img src={bullet} className="App-logo" alt="bullet" />
            <div>{owl}</div>
            <div>{owl}</div>
          </div> 
        </section>
      
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <h1>Header</h1>
        </p>
      </div>
    );
  }
}

export default App;
