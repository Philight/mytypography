import React, { Component } from "react";
import './FontResult.css';
import './Fonts.css'

class FontResult extends Component {
	constructor(props) {
    	super(props);
  	}

 render () {
    const myStyle = {
      fontFamily: this.props.fontFamily,
      fontSize: this.props.fontSize + 'px',
      fontWeight: (this.props.boldChecked) ? 'bold' : 'normal',
      fontStyle: (this.props.italicChecked) ? 'italic' : 'normal',
    }

    return (
      <div className="font-result col-md-12">
          <output style={myStyle}>{this.props.inputValue}</output>
      </div>
    )
  }
}

export default FontResult;