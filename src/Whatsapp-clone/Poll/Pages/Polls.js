import React, { Component } from 'react'

import Poll from 'react-polls';

// Declaring poll question and answers
const pollQuestion = 'Is react-polls useful?'
const pollAnswers = [
  { option: 'Yes', votes:8 },
  { option: 'No', votes: 2 }
]

export class Polls extends Component {

    state = {
        pollAnswers: [...pollAnswers]
      }
    
      // Handling user vote
      // Increments the votes count of answer when the user votes
      handleVote = voteAnswer => {
        const { pollAnswers } = this.state
        const newPollAnswers = pollAnswers.map(answer => {
          if (answer.option === voteAnswer) answer.votes++
          return answer
        })
        this.setState({
          pollAnswers: newPollAnswers
        })
      }

    render() {
        const { pollAnswers } = this.state
        return (
            <div>
        <Poll question={pollQuestion} answers={pollAnswers} onVote={this.handleVote} />
      </div>
        )
    }
}

export default Polls
