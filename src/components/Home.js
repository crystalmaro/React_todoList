import React, { Component } from 'react'
import axios from 'axios'


class Home extends Component{
  state = {
    posts: []
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
          posts: res.data.slice(0,10)
        })
      })
  }
  render(){
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(x => {
        return(
          <div className='post card' key={x.id}>
            <div className="card-content">
              <span className='card-title'>{x.title}</span>
              <p>{x.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className='center'>No Posts Yet</div>
    )

    return (
    <div>
      <div className="container">
        <h4 className="center">Home</h4>
        { postList }
      </div>
    </div>
    )
  }
}

export default Home