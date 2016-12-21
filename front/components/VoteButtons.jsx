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
      <div>
          <button onClick={this.handleVote} value="up">Thumbs up!</button>
          <button onClick={this.handleVote} value="down">Thumbs down!</button>
      </div>
    )
  }
})

export default Vote;
