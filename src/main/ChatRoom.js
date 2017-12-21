import React from 'react';
import firebase from '../config/fire';
class ChatRoom extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.updateMessage = this.updateMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.state = {
            message: "",
            messages: []
        }
    }
    componentDidMount() {
        console.log("componentDidMount");
        firebase.database().ref('messages/').on('value', (snapshot) => {
            const currentMessages = snapshot.val()
            if (currentMessages != null) {
                this.setState({
                    messages: currentMessages
                })
            }
        })
    }
    updateMessage(event) {
        this.setState({
            message: event.target.value
        })
    }
    sendMessage(event) {
        console.log("sendMessage" + this.state.message);
        if (this.state.message != "") {
            const nextMessage = {
                id: this.state.messages.length,
                text: this.state.message
            }
            firebase.database().ref('messages/' + nextMessage.id).set(nextMessage)
        }
    }
    render() {
        const currentMessage = this.state.messages.map((message, i) => {
            return (
                <li key={message.id}>{message.text}</li>
            )
        })
        return (
            <div>
                <h1> This is realtime chat room</h1>

                <ol>
                    {currentMessage}
                </ol>
                <input onChange={this.updateMessage} type="text" placeholder="Message Here" />
                <br />
                <button onClick={this.sendMessage}>Send Message</button>
            </div>
        )
    }
}
export default ChatRoom