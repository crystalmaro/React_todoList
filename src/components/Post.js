import React, { Component } from 'react'

class Post extends Component {
  componentDidMount(){
    console.log(this.props)
    let id = this.props.match.params.post_id;

  }
  render() {
    return (
      <div className='container'>
        <h4>route param</h4>
        
      </div>
    )
  }
}

export default Post