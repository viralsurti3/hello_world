import React, { Component } from "react";

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Message for Veeral  from message Component'
        }
    }

    userFollowed() {
        this.setState({
            message: 'Thanks for Following'
        })
    }

    render() {
        return (
            <div>
                <h3> {this.state.message}</h3>

                <button onClick={()=>this.userFollowed()}> + Follow</button>
            </div>

        )
    }
}

export default Message