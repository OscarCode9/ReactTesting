import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

class CommentBox extends Component {
    
    state = {
        comment: ''
    }

    handleChange = (event) => {
        this.setState({comment: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const  { saveComment } = this.props
        const { comment } = this.state

        saveComment(comment)
        this.setState({comment: ''})
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} >
                <h4> Add a Comment </h4>
                <textarea onChange={this.handleChange} value={this.state.comment} />
                <div>
                    <button onClick={this.handleSubmit}>
                        Submit Comment
                    </button>
                </div>
            </form>
        )
    }

}

export default  connect(null, actions)( CommentBox)