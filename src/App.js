import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import FontResult from './components/FontResult';
import FontDropdown from './components/FontDropdown';
import InputBar from './components/InputBar';
import Footing from './components/Footing';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      fontFamily: "",
      fontWeight: "",
      fontSize: 20
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
              <FontDropdown 
                fontFamily={this.state.fontFamily}
                onChangeFontFamily={this.handleFontFamily.bind(this)}
                fontWeight={this.state.fontWeight}
                onChangeFontWeight={this.handleFontWeight.bind(this)}
                fontSize={this.state.fontSize}
                onChangeFontSize={this.handleFontSize.bind(this)}
              />
            </div>
            <div className="row font-result-wrapper">
              <FontResult 
                inputValue={this.state.inputValue}
                fontFamily={this.state.fontWeight}
                fontSize={this.state.fontSize}
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
