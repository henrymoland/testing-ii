import React, { Component } from 'react';
import Dashboard from './Dashboard';

class Display extends Component {

  state = {
    strikes: 0,
    balls: 0,
    fouls: 0
  }
  

  // Strike, Ball and Foul handlers to update count
  handleStrike = () => {
    if (this.state.strikes < 3) {
      this.setState({
        ...this.state,
        strikes: this.state.strikes + 1
      })
    }

    if(this.state.strikes === 3) {
      this.setState({
        strikes: 0,
        balls: 0
      })
    }
  }

  handleBall = () => {
    if (this.state.balls < 4) {
      this.setState({
        ...this.state,
        balls: this.state.balls + 1
      })
    }

    if(this.state.balls === 4 || this.state.strikes === 3) {
      this.setState({
        strikes: 0,
        balls: 0
      })
    }
  }

  handleFoul = () => {
    if (this.state.strikes < 3) {
      this.setState({
        ...this.state,
        strikes: this.state.strikes + 1
      })
    }
  }

  // Hit handler to set count back to 0 when batter hits the ball
  handleHit = () => {
    this.setState({
      balls: 0,
      strikes: 0
    })
  }


  render() {
    return (
      <div className="primary-overlay">
        <div className="main-header">
          <div className="display-container">
            <Dashboard handleStrike={ this.handleStrike } handleBall={ this.handleBall } handleFoul={ this.handleFoul } handleHit={ this.handleHit } />
            <div className= 'count center white-text'>
              <h3>Balls: <span>{ this.state.balls }</span></h3>
              <h3>Strikes: <span>{ this.state.strikes }</span></h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Display;