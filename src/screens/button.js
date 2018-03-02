import React,{Component} from 'react';
import "./styles/buttonstyles.css";

import GameState from '../AppStore';

class Button extends Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			buttonPressed:GameState.state.buttonPressed,
			initTime: GameState.state.initTime,
			showText: false
		}
		
		this.mouseEnterButton = this.mouseEnterButton.bind(this);
		this.mouseLeaveButton = this.mouseLeaveButton.bind(this);
	}
	
	mouseEnterButton(){
		this.setState({showText:true});
	}
	
	mouseLeaveButton(){
		this.setState({showText:false});
	}
	
	render(){
		let show = this.state.showText ? "show" : "";
		return(
			<div className="Container">
				<div className="GridContainer Three Wide Three Tall Container">
					<div className="Three Row One Column">
						<br />
					</div>
					<div className="One Column One Row Container">
						<div className={"speech-bubbleContainer "+show}>
							<div className={"speech-bubble "+show}>
								I said don't touch me.
							</div>
						</div>
					</div>
					<div className="One Column One Row">
						<br />
					</div>
					<div className="One Column One Row">
						<div className="mainButton" onMouseEnter={this.mouseEnterButton} onMouseLeave={this.mouseLeaveButton}>
							<div>Don't Touch Me</div>
						</div>
					</div>
					<div className="One Column One Row">
						<br />
					</div>
					<div className="One Column One Row">
						<br />
					</div>
					<div className="One Column One Row">
						<br />
					</div>
				</div>
			</div>
		);
	}
}

export default Button