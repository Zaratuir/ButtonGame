import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Button from './screens/button';
import GameState from './AppStore';
import './css/gamestyles.css';

class App extends Component {
	constructor(props,context){
		super(props,context);
		this.state = GameState.state;
	}
	
  render() {
    return (
    	<BrowserRouter>
      		<div className="App">
      			<Route exact path="/" component={Button} />
     		</div>
     	</BrowserRouter>
    );
  }
}

export default App;
