import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  state = {
      mood: 'Sad',
      message2: "TAKE ME TO CHICKEN PLACE OR I DIE. MOVE UR FAT FINGERS NOW.",
      buttonMessage: "CLICK THIS U ASSHOLE",
      donateQRcode: ""

  }
  handleClick = () => {
    this.setState({ mood: 'Perfect',
                    message1: 'NOW ITS TIME TO DONATE! SCAN DOWNA QR CODE :)',
                    messgae2: "COME ON",
                    buttonMessage: "DONATE NOW!!! U CAN'T CALCEL IT :D",
                    donateCode: "http://get.toss.im/RErc/8WqqRC9NeE"});

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>chickenVillain</h2>
        </div>
        <div className="App-intro">
          <h1>LOOKA MY MOOOOOOD!!!!!!!</h1>
          <h3>Freckin {this.state.mood}!!!!</h3>
          <h5>{this.state.message1}</h5>
          <h5>{this.state.message2}</h5>
          <button onClick = {this.handleClick}>
          {this.state.buttonMessage}
          </button ><br /><br />
          {this.state.donateCode}
        </div>
      </div>
    );
  }
}

export default App;
