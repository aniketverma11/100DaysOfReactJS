import React, { Component } from "react";

/**
 * Represents a class component called Welcome.
 * @class Welcome
 * @extends {Component}
 */
class Welcome extends Component {
    /**
     * Renders the Welcome component.
     * @returns {JSX.Element} The rendered React element.
     */
    render() {
        // Return an h1 element with the text "Class Component"
        return(
            React.createElement(
                'h1',
                null,
                "class Component"
            )
        )
        
    }
}

// Export the Welcome component to make it accessible to other parts of the application
export default Welcome;
