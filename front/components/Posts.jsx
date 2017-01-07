import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';


const Posts = React.createClass({
  getInitialState: function(){
    return ({allPosts:[]})
  },
  componentDidMount(){
    $.ajax({
      url: '/api/post',
      type: 'GET',
      success:((data)=>{
        data ? this.setState({allPosts:data}) : console.log('Error with post object')
      })
    })
  },
  render: function(){
    console.log(this.state.allPosts, 'what is this?')
    let PostDisplay = this.state.allPosts.map((value,index)=>{
      return <Link className="posts" key={index} to={"/singlepost/" + value.id}><li key={index}><h1 key={index}>{value.title}</h1></li></Link>
    })
    return (
      <div>
        <center>
          <h1>Posts</h1>
          {PostDisplay}
        </center>
      </div>
    )
  }
})

export default Posts;
