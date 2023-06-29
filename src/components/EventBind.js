import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         text: "hello"
      }

    }

    
    // Clickevent = () => {
    //     this.setState({
    //         text:"ho gaya khtm tata"
    //     })
    // }

    Clickevent() {
        this.setState({
            text:"ho gaya khtm tata"
        })
    }

  render() {
    return (
      <div>
        
        <h1>{this.state.text}</h1>
        {/* <button onClick={this.Clickevent}>Click me for event bind</button> */}

        <button onClick={() => this.Clickevent()}>Click me for event bind</button>

      </div>
    )
  }
}

export default EventBind