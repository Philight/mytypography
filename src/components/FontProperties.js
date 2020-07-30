import React, { Component } from "react";
import './FontProperties.css';
import { FontList } from './FontList';

class FontProperties extends Component {
  	constructor(props) {
	    super(props);
	}

 render () {
 	
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 zero-padding">
        <form className="properties-form">
			<label>
				Font Properties
				<br />
				<div className="properties-flex-display">
					<select className="responsive-font-size" value={this.props.fontFamily} onChange={this.props.onChangeFontFamily}>
						<option></option>
						{	FontList.FontFamilies.map(eachFamily =>
								<option value={eachFamily}>{eachFamily}</option>
						)}
					</select>

					<select className="responsive-font-size" value={this.props.fontWeight} onChange={this.props.onChangeFontWeight}>
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
						className="responsive-font-size"
						value={this.props.fontSize}
						type="text"
						autocomplete="off"
						placeholder="10"
						onChange={this.props.onChangeFontSize}
					/>
				</div>
			</label>
        </form>
      </div>
    )
  }
}

export default FontProperties;