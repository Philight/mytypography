import React, { Component } from "react";
import './FontProperties.css';
import { FontList } from './FontList';

class FontProperties extends Component {
  	constructor(props) {
	    super(props);
	}

 render () {
 	const boldStyle = {
 		color: (this.props.boldChecked) ? '#ed2445' : '#000000',
 	}
 	const italicStyle = {
 		color: (this.props.italicChecked) ? '#ed2445' : '#000000',
 	}

    return (
      <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6 zero-padding">
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
						className="input-font-size responsive-font-size"
						value={this.props.fontSize}
						type="text"
						autocomplete="off"
						placeholder="10"
						onChange={this.props.onChangeFontSize}
					/>
				</div>
				<label className="checkbox responsive-font-size">
				  	<span style={boldStyle}>Bold</span>
				 	<input 
				 		className="zero-margin" 
				 		type="checkbox" 
				 		onClick={(event) => this.props.onClickCheckbox(event, 'bold')}
				 	/>
				  	<span className="checkmark"></span>
				</label>
				<label className="checkbox responsive-font-size">
				  	<span style={italicStyle}>Italic</span>
				 	<input 
				 		className="zero-margin" 
				 		type="checkbox"
				 		onClick={(event) => this.props.onClickCheckbox(event, 'italic')}
				 	/>
				  	<span className="checkmark"></span>
				</label>

			</label>
        </form>
      </div>
    )
  }
}

export default FontProperties;