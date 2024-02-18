import React from 'react'

function Person({name}) {
  return (
    <div>
    <h2>I am {name.name}. I am {name.age} years old. I know {name.skill}</h2>
    </div>
  )
}

export default Person