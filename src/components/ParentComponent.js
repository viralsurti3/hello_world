import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         ParentName:'Parent Here'
      }
    }


    CallParent(){
        alert('Hello '+ this.state.ParentName)
    }
  
    render() {
        return (
            <div>
                <ChildComponent ClickHandler={() => this.CallParent()} ></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent