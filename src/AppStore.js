class AppStore{
	constructor(props){
		this.state = {
			initTime:Date.now(),
			buttonPressed:0,
			hiddenEvent:false
		}
	}
}

const GameState = new AppStore();

export default GameState;