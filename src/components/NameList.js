import React from "react";
import Person from "./Person";


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
    const personList = persons.map(name =>  (<Person key ="unique" name={name}/>))
    return <div>{personList}</div>
}


export default NameList;