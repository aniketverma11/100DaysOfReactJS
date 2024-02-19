import React, { Component } from 'react'

class UserGreet extends Component {

    constructor(props){
        super(props)

        this.state = {
            isLoggedin: false
        }
    }

    //4 approach is to use short-circuite approach
    render(){
        return(

            this.state.isLoggedin && React.createElement(
                'div',
                null,
                "Welcome Aniket"
            )
        )
    }
    //3 approach is to use ternary 
    render(){
        return ( 
            this.state.isLoggedin ? (
                React.createElement(
                    'div',
                    null,
                    "Welcome Aniket"
                )
            ) : (
                React.createElement(
                    'div',
                    null,
                    "Aniket is not logged-in"
                )
            )
        )
    }

    // 2 approach for condition rendering is asigning jsx to element
    render(){
        let message;
        if (this.state.isLoggedin){
            message = React.createElement(
                'div',
                null,
                "Welcome Aniket"
            )
        }else{
            message = React.createElement(
                'div',
                null,
                "Aniket is not logged-in"
            )
        }

        return React.createElement(
            'div',
            null,
            message
        )
    }

    // 1 approach for conditional rendering
    render() {
        if (this.state.isLoggedin){ 
            return (
                <div>Welcome Aniket</div>
            )
        } else {
            return (
                <div>Your are not Logged-in</div>
            )   
        }
    }
}

export default UserGreet