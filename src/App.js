import React, { Component } from "react";

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Heading from './components/Heading';
import FontResult from './components/FontResult';
import FontProperties from './components/FontProperties';
import InputBar from './components/InputBar';
import Footing from './components/Footing';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      fontFamily: "",
      fontWeight: "",
      fontSize: 20,
      boldChecked: false,
      italicChecked: false,
    }
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  handleFontFamily(event) {
    this.setState({ fontFamily: event.target.value });
  }

  handleFontWeight(event) {
    this.setState({ fontWeight: event.target.value });
  }

  handleFontSize(event) {
    this.setState({ fontSize: event.target.value });
  }

  handleCheckbox(event, name) {
    if (name === 'bold')
      this.setState({ boldChecked: event.target.checked });
    else
      this.setState({ italicChecked: event.target.checked });
  }

  render () {
    return (
      <div className="outer-container">

        <div className="container">

          <Heading />

          <div className="container-body">
            <div className="row input-bar-wrapper">
              <InputBar 
                inputValue={this.state.inputValue}
                onChange={this.handleInputChange.bind(this)}
              />
              <FontProperties 
                fontFamily={this.state.fontFamily}
                onChangeFontFamily={this.handleFontFamily.bind(this)}
                fontWeight={this.state.fontWeight}
                onChangeFontWeight={this.handleFontWeight.bind(this)}
                fontSize={this.state.fontSize}
                onChangeFontSize={this.handleFontSize.bind(this)}
                boldChecked={this.state.boldChecked}
                italicChecked={this.state.italicChecked}
                onClickCheckbox={this.handleCheckbox.bind(this)}
              />
            </div>
            <div className="row font-result-wrapper">
              <FontResult 
                inputValue={this.state.inputValue}
                fontFamily={this.state.fontWeight}
                fontSize={this.state.fontSize}
                boldChecked={this.state.boldChecked}
                italicChecked={this.state.italicChecked}
              />
            </div>
          </div>

          <Footing />

        </div>

      </div>
    )
  }
}

export default App;
