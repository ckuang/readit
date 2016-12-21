import React from 'react';
import $ from 'jquery';
// import commentForm from './CommentForm.jsx';
//
const Comments  = React.createClass({
getInitialState(){
	return({comments: []})
}, 
componentDidMount(){
	$.ajax({
		url:'/api/comment',
		type: 'GET',
		success:((data)=>{
		data ? this.setState({comments:data}) : console.log('Error with comment objects')
		})
	})
},
	render(){
	let CommentDisplay = this.state.comments.map((value,index)=>{
		return <Link key={index} to={'/singlecomment/' + value.id}><li key={index}><h1 key={index}>{value.comment}</h1></li></Link>
	})
	return(
			<div>
				<center>
				<h1>ALL COMMENTS:</h1>
				{CommentDisplay}
				</center>
			</div>
		)
	}
})

export default Comments;


