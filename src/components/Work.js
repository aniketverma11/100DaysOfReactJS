import React, {Component} from "react";

class Work extends Component {
    render(){
        return(
            React.createElement(
                'div',
                null,
                React.createElement(
                    'section',
                    {id: "works"},
                    React.createElement(
                        "h2",
                        {className: 'worktitle'},
                        "My Portfolio"
                    ),
                    React.createElement(
                        'span',
                        {className: 'workDesc'},
                        "This is span"
                    ),
                    React.createElement(
                        'div',
                        {className: 'worksImage'},
                        "This is image part"
                    )
                )
            )
        )
    }
}

export default Work;