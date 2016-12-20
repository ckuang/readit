import React from 'react';
import $ from 'jquery';

//
const OneComment = React.createClass({
getInitialState(){
	return({one: []})
},
componentDidMount(){
	$.ajax({
		url: '/api/comment/',
		type: 'GET',
		success: ((data)=>{
			console.log(data[0].comment, 'this is the data');
			console.log(data[1].comment, 'this is the data again')
			data ? this.setState({one:data}) : console.log('Error with comment objects')
		})
	})
},
	render(){
	let SingleDisplay = this.state.one.indexOf((item, index)=>{
		return <li key={index}><h1>{item[0].comment}</h1></li>
	})
		return (
		<div>
			<center>
			<h1>Single Comments:</h1>
			{SingleDisplay}
			</center>
		</div>
		)
	}
})
//
//
//
export default OneComment;