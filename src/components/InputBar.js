import React, { Component } from "react";
import './InputBar.css';

class InputBar extends Component {
	constructor(props) {
	    super(props);
	}

	render() {
	    return (
	      <div className="col-xs-12 col-sm-12 col-md-6 zero-padding">
			<form className="inputform">
				<label>
					Type your text
					<br />
					<input
						className="inputform__input"
						type="text" 
						value={this.props.inputValue}               
						onChange={this.props.onChange}
						placeholder="myTypography"
						autocomplete="off"
					/>
				</label>
            </form>
	      </div>
	    )
	}
}

export default InputBar;