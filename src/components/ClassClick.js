import React, { Component } from 'react'

class ClassClick extends Component {

    clickedMe(){
        alert('alert')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickedMe} >Click ME</button>
      </div>
    )
  }
}

export default ClassClick