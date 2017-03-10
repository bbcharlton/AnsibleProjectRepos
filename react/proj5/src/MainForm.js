import React, { Component } from 'react'
import './MainForm.css'

export default class MainForm extends Component {
	createItem(e) {
		e.preventDefault();

		const item = {
			name: this.name.value,
			status: 'to-do'
		}

		this.props.addItem(item)
		this.mainForm.reset();
	}

	render() {
		return (
			<section className="Main-Form" style={{ background: this.props.randomColor }}>
				<form className="item-add" 
					ref={(input) => this.mainForm = input}
					onSubmit={(e) => this.createItem(e)}>
					<input 
						type="text" 
						placeholder="Add item..." 
						required 
						ref={(input) => this.name = input}/>
					<button type="submit">Add Item</button>
				</form>
			</section>
		)
	}
}