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
    }

    return (
      <div className="font-result col-md-12">
        	<label style={myStyle}>{this.props.inputValue}</label>
      </div>
    )
  }
}

export default FontResult;