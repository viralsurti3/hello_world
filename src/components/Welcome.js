import React,{Component} from "react";

class Welcome extends Component{
    render(){
        const {name} = this.props
        return <h3> {name} Class Component </h3>
    }
}

export default Welcome