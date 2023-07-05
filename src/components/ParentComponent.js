import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         ParentName:'Parent Here'
      }
    }


    CallParent(ChildName){
        alert('Hello '+ this.state.ParentName + ' from ' + ChildName)
    }
  
    render() {
        return (
            <div>
                <ChildComponent ClickHandler={this.CallParent.bind(this)} ></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent