import React, { Component } from 'react'

export class ConditionalRendering extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         IsLoggedIn : false
      }
    }
  
  render() {

    if(this.state.IsLoggedIn){
        return <div>Hello User</div>
    }else{
        return <div>Hello Guest</div>
    }
  }
}

export default ConditionalRendering