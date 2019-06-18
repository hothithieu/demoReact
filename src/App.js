import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import content from './component/content';

class ShownWeb extends Component{
	render() { 
		return (
			<BrowserRouter>
				<Route exact path= '/' component = {content}/>
			</BrowserRouter>
		);
	} 
}

export default ShownWeb ;