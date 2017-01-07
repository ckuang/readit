import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import Comments from './Comments.jsx';

import Vote from './VoteButtons';

const SinglePost = React.createClass({
getInitialState(){
	return({post:null})
},
componentDidMount(){
	$.ajax({
		url:'/api/post/' + this.props.params.id,
		type:'GET',
		success: ((data) => {
			this.setState({post:data})
			console.log('I am data: ', data)
		})
	})
},
	render(){
		if(!this.state.post){
			return (<div>Loading..</div>)

		}
		else {
			return (<div>
								<center>
									<h1>{this.state.post.title}</h1>
									<p>{this.state.post.body}</p>
								</center>
								<Vote />
								<Comments/>
							</div>)

		}
	}
})

export default SinglePost;
