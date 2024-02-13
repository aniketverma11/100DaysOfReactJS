import React from "react";

function FunctionClick() {

    function clickHandler(){
        console.log("Button Click")
    }
    return(
        React.createElement(
            'div',
            null,
            React.createElement(
                'button',
                {onClick: clickHandler},
                "Click"
            )
        )
    )
}

export default FunctionClick;