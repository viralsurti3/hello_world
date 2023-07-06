import React from 'react'

function ListRendering() {
    const names = ['viral','veeral','veeru']
    const nameList = names.map(name => <h1>{name}</h1>)
  return (
    <div>{nameList}</div>
  )
}

export default ListRendering