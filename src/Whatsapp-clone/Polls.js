import React, { Component } from 'react'

import Poll from 'react-polls';

// Declaring poll question and answers
const pollQuestion = 'How is the Dress?'
const pollAnswers = [
  { option: 'Awesome ', votes:8 },
  { option: 'worst', votes: 2 }
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
        <Poll align = 'right' question={pollQuestion} answers={pollAnswers} onVote={this.handleVote} />
      </div>
        )
    }
}

export default Polls

