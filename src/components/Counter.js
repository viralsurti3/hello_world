import React, { Component } from 'react'


export class Counter extends Component {
    
    
    constructor(props) {
        super(props)
    
        this.state = {
        counter: 1
        }
    }

    increment(props){ 
        // this.setState({
        //     counter : this.state.counter + 1
        // },
        // ()=>{
        //     console.log(this.state.counter);
        // })

        this.setState((prevState)=>({
            counter:prevState.counter + 1
        }),
        ()=>{
            console.log(this.state.counter);
        })
    }



    render() {
    return (
        <div>
            Counter - {this.state.counter}
            
            <button onClick={()=>this.increment()}>Increment</button>
        </div>
    )
  }
}

export default Counter