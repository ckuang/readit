import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

const SingleComment = React.createClass({
// getInitialState(){
// 	return({comment:null})
// },
// componentDidMount(){
// 	$.ajax({
// 		url: '/api/comment/' + this.props.params.id,
// 		type: 'GET',
// 		success: ((data)=>{
// 			this.setState({comment:data})
// 			console.log('this is data',data)
// 		})
// 	})
// },
	render(){
		return (
			<div>
				{this.props.comments.comment}
			</div>
			)
	// 	if(!this.state.comment){
	// 		return (<div>Loading..</div>)
	// 	}else{
	// 		return(<div><center>{this.state.comment}</center></div>)
	// 	}
	}
})
export default SingleComment;