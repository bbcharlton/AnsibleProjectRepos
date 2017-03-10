import React, { Component } from 'react';
import './App.css';
import {randomColor} from './help';
import MainForm from './MainForm'
import ItemList from './ItemList'

let mainColor = randomColor();

class App extends Component {
  constructor() {
    super()
    this.addItem = this.addItem.bind(this)
    this.state = {
      items: {
        item1: {
          name: 'This is the first name',
          status: 'to-do'
        },
        item2: {
          name: 'This is the second name',
          status: 'to-do'
        }
      }
    }
  }

  addItem(item) {
    // update our state with a copy
    const items = {...this.state.items}

    // add our new item
    const timestamp = Date.now()

    items[`item-${timestamp}`] = item

    // set state
    this.setState({ items })
  }

  removeItem = (key) => {
    const items = {...this.state.items}

    delete items[key]
    this.setState({ items })
  }

  updateItem = (key, updateItem) => {
    const items = {...this.state.items}
    items[key] = updateItem
    this.setState({ items })
  }

  render() {
    return (
      <div className="App">
        <h1>Title of the app</h1>
        <MainForm 
          randomColor={mainColor} 
          addItem={this.addItem} />
        <ItemList 
          items={this.state.items} 
          removeItem={this.removeItem} 
          updateItem={this.updateItem}/>
      </div>
    );
  }
}

export default App;
