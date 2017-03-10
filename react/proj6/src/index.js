import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import {
// 	BrowserRouter,
// 	Match
// } from 'react-router';

// const Root = () => {
// 	return (
// 		<BrowserRouter>
// 			<Match exactly pattern="/" component={App} />
// 		</BrowserRouter>
// 	)
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
