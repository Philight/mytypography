import React, { Component } from "react";
import './InputBar.css';

class InputBar extends Component {
	constructor(props) {
	    super(props);
	}

	render() {
	    return (
	      <div className="col-md-7 col-xs-12">
			<form className="inputform">
				<label>
					Type your text here:
					<br />
					<input
						className="inputform__input"
						type="text" 
						value={this.props.inputValue}               
						onChange={this.props.onChange}
						placeholder="C'est la vie..."
						autocomplete="off"
					/>
				</label>
            </form>
	      </div>
	    )
	}
}

export default InputBar;