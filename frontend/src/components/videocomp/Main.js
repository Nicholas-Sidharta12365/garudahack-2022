import React, {Component} from 'react';
import './Main.scss';
import Room from './Room';
import axios from 'axios';
const {connect} = require('twilio-video');


class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          identity: '',
          room: null
        }
        this.inputRef = React.createRef();
        this.joinRoom = this.joinRoom.bind(this);
        this.returnToLobby = this.returnToLobby.bind(this);
        this.updateIdentity = this.updateIdentity.bind(this);
        this.removePlaceholderText = this.removePlaceholderText.bind(this);

    }

    async joinRoom() {
        try {
          //const response = await fetch(`http://localhost:3000/call?identity=${this.state.identity}`);
          
          const response = await axios.post(
            "http://localhost:5000/call", {
                roomName: "test"
            }
          )
          
          const data = response.data.token;
          
          const room = await connect(data, {
            name: 'cool-room', 
            audio: true, 
            video: true
          });
      

          this.setState({ room: room });

        } catch(err) {
          console.log(err);
        }
    }

    returnToLobby() {
        this.setState({ room: null });
    }

    removePlaceholderText() {
        this.inputRef.current.placeholder = '';
    }

    updateIdentity(event) {
        this.setState({
            identity: event.target.value
        });
    }
    render() {
        const disabled = this.state.identity === '' ? true : false;
        return (
          <div className="app">
            { 
              this.state.room === null
              ? <div className="lobby">
                   <input 
                     value={this.state.identity} 
                     onChange={this.updateIdentity} 
                     ref={this.inputRef}
                     onClick={this.removePlaceholderText}
                     placeholder="What's your name?"/>
                  <button disabled={disabled} onClick={this.joinRoom}>Join Room</button>
                </div>
              : <Room returnToLobby={this.returnToLobby} room={this.state.room} />
            }
          </div>
        );
    }
}

export default Main;