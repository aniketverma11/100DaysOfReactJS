import React from 'react';

/**
 * Represents a functional component called Greet.
 * @returns {JSX.Element} A React element displaying "Hello World" inside an h1 tag.
 */
const Greet = props => {
    console.log(props);
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            `Hello ${props.name} a.k.a ${props.heroName}`
        ),
        React.createElement(
            'p',
            null,
            props.children
        )
    );
    // (
    //     <div>
    //         <h1>Hello {props.name} a.k.a {props.heroName}</h1>
    //         {props.children}
    //     </div>
    
    // )
}

// Export the Greet component to make it accessible to other parts of the application
export default Greet;
  