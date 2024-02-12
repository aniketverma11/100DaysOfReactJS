import React, {Component} from "react";

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: "Welcome Visitor"
        }
    }

    changeMessage(){
        this.setState(
            {
                message: "Thank you for subscribing"
            }
        )
    }
   
    render() {
        return(
            React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.state.message,
                ),
                React.createElement(
                    'button',
                    { onClick: () => this.changeMessage() },
                    "Subscribe"
                )
            )
        )
    }
}

// Export the Welcome component to make it accessible to other parts of the application
export default Message;