import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

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
		}else{
			return (<div><center>{this.state.post.title}{this.state.post.body}</center></div>)
		}
	}
})

export default SinglePost;