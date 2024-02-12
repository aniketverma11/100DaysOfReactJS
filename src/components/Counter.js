import React, { Component } from "react";


class Count extends Component{
    constructor(props){
        super()
        this.state = {
            count: 0
        }
    }

    increment(){
        // this.setState({
        //     count: this.state.count + 1
        // })
        
        this.setState((prevState) => (
            {
                count: prevState.count + 1
            }
        )
        )
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        return(
            React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    "Count -> "+ this.state.count
                ),
                React.createElement(
                    "button",
                    {onClick: ()=> this.incrementFive()},
                    "Increment"
                )
            )
        )
    }
}

export default Count;