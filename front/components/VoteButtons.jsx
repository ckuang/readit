import React from 'react';

const Vote = React.createClass({
  getInitialState: function() {
    return {
      voteCount: 0
    }
  },
  handleVote: function () {

  },
  render: function(){
    return (
      <div className="voteDiv">
          <button className="upVote" onClick={this.handleVote} value="up">Thumbs up!</button>
          <button className="downVote" onClick={this.handleVote} value="down">Thumbs down!</button>
      </div>
    )
  }
})

export default Vote;
