import React from 'react';
import $ from 'jquery';

//
const OneComment = React.createClass({
getInitialState(){
	return({comment: []})
},
componentDidMount(){
	$.ajax({
		url: '/api/comment',
		type: 'GET',
		success: ((data)=>{
			data ? this.setState({comment:data}) : console.log('Error with comment objects')
			console.log(data,'this is the data')
		})
	})
},
	render(){
		let SingleComment = this.state.comment.map((value,index)=>{
			return <li key={index}><h1>{value.comment}</h1></li>
		})

		console.log(SingleComment, 'what is this?')
		return (
		<div>
			<center>
			<h1>Single Comments:</h1>
			{SingleComment}
			</center>
		</div>
		)
	}
})
//
//
//
export default OneComment;