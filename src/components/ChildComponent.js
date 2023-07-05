import React from 'react'

function ChildComponent(props) {
  return (
    <button onClick={() => props.ClickHandler('Child Comp')}> Click Here for Greeting Parent. </button>
  )
}

export default ChildComponent