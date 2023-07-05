import React from 'react'

function ChildComponent(props) {
  return (
    <button onClick={props.ClickHandler}> Click Here for Greeting Parent. </button>
  )
}

export default ChildComponent