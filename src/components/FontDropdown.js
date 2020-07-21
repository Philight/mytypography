import React, { Component } from "react";
import './FontDropdown.css';
import { FontList } from './FontList';

class FontDropdown extends Component {
  	constructor(props) {
	    super(props);
	}

 render () {
 	
    return (
      <div className="col-md-5 col-xs-12">
        <form className="dropdownform">
			<label>
				Font Properties
				<br />

				<select value={this.props.fontFamily} onChange={this.props.onChangeFontFamily}>
					<option></option>
					{	FontList.FontFamilies.map(eachFamily =>
							<option value={eachFamily}>{eachFamily}</option>
					)}
				</select>

				<select value={this.props.fontWeight} onChange={this.props.onChangeFontWeight}>
					<option></option>
					{	this.props.fontFamily ? ( 
							FontList[this.props.fontFamily].map(eachWeight =>
								<option value={eachWeight}>{eachWeight}</option>
						)) : (
							<option></option>
						)	
					}
				</select>

				<input 
					value={this.props.fontSize}
					type="text"
					autocomplete="off"
					placeholder="10"
					onChange={this.props.onChangeFontSize}
				/>
			</label>
        </form>
      </div>
    )
  }
}

export default FontDropdown;