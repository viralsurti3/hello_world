import React, { Component } from 'react'

class Form extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       username : 'veeral',
       comments : '',
       topic : 'vue'
    }


  }

  handleUsernameChange = (event) => {
    this.setState({
        username : event.target.value 
    })
  } 

  handleCommentsChange = (event) => {
    this.setState({
        comments:event.target.value
    })
  }

  handleTopicChange = (event) => {
    this.setState({
        topic: event.target.value
    })
  }

  handleFormsubmit = event => {
    event.preventDefault();
    alert(` ${this.state.username}  ${this.state.comments} ${this.state.topic} `)
  }
  
  
   render() {
    return (
      <div>
        <form onSubmit={this.handleFormsubmit}>
            <div>
                <label for="username">User name</label>
                <input type='text' name='username' onChange={this.handleUsernameChange} value={this.state.username}/>
            </div>
            <div>
                <label for="comments">Comments</label>
                <input type='text' name='comments' onChange={this.handleCommentsChange} value={this.state.comments}/>
            </div>
            <div>
                <label for="topic">Topic</label>
                <select name='topic' onChange={this.handleTopicChange} value={this.state.topic}>
                    <option value='react'> React </option>
                    <option value='vue'> Vue </option>
                    <option value='Angular'> Angular </option>
                </select>
            </div>
            <div>
                <input type='submit' name='submit' value="submit"></input>
            </div>
        </form>
      </div>
    )
  }
}

export default Form