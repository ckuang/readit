import React from 'react';
import {ajax} from 'jquery';

const Posts = React.createClass({
  getInitialState: function(){
    return {
      allPosts: []
    }
  },
  componentDidMount: function (){
    var that = this;
    ajax({
      url: '/api/post',
      type: 'GET'
    })
    .then(function (response) {
      that.setState({
        allPosts: response
      })
    })
  },
  render: function(){
    return (
      <div>
        <ul>
          {
            this.state.allPosts.map(function(val, idx) {
              return <li key={idx}>{val.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
})

export default Posts;
