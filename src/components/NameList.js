import React from "react";


function NameList() {
    const persons = [
        {
            id: 1,
            name: "Ram",
            age: 20,
            skill: "Python and Flask"
        },
        {
            id: 2,
            name: "Shyam",
            age: 21,
            skill: "Python and Django"
        },
        {
            id: 1,
            name: "Mohan",
            age: 22,
            skill: "Node"
        },
        {
            id: 1,
            name: "Sohan",
            age: 23,
            skill: "React and web development"
        }
    ];
    const personList = persons.map(name => (
            <h2>I am {name.name}. I am {name.age} years old. I know {name.skill}</h2>
        )
    )
    return <div>{personList}</div>
}


export default NameList;