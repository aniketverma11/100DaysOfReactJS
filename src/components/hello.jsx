import React from "react";

/**
 * Represents a simple Hello component.
 * @returns {JSX.Element} A React element displaying "Hello Aniket" inside an h1 tag.
 */
const Hello = () => {
    // Return a React element using React.createElement
    return React.createElement(
        // Create a div element with id "hello" and className "dummyclass"
        'div',
        {id: "dummy", className:"dummyclass"},
        // Inside the div, create an h1 element with text "Hello Aniket"
        React.createElement(
            'h1',
            null,
            "Hello Aniket"
        )
    )
}

// Export the Hello component to make it accessible to other parts of the application
export default Hello;