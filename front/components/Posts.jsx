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
    let PostDisplay = this.state.allPosts.map((value,index)=>{
      return <Link key={index} to={"/singlepost/" + value.id}><li key={index}><h1 key={index}>{value.body}</h1></li></Link>
    })
    return (
      <div>
      <center>
        <h1> Post Page </h1>
        {PostDisplay}
        </center>
      </div>
    )
  }
})

export default Posts;
