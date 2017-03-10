import React, { Component } from 'react';
import './ItemList.css';
import {randomColor} from './help';

export default class ItemList extends Component {
	render() {
		let items = this.props.items
		let itemref = this.props

		function completeItem(key) {
			const item = itemref.items[key]
			let changeStatus = items[key].status === 'complete' ? 'to-do' : 'complete'
			const updatedItem = {
				...item,
				status: changeStatus
			}

			itemref.updateItem(key, updatedItem)
		}

		return (
			<ul className="Item-List">
				{Object.keys(items).map(function(id) {
					return(
						<li className="item" key={id} style={{ background: randomColor() }}>
							{items[id].name}
							<br />
							{items[id].status === 'to-do' ? 'to-do' : 'complete'}
							<br />
							<button onClick={() => itemref.removeItem(id)}>Remove</button>
							<button onClick={() => completeItem(id)}>{items[id].status === 'to-do' ? 'complete' : 'redo'}</button>
						</li>
					)
				})}
			</ul>
		)
	}
}