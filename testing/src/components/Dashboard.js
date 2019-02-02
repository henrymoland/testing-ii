import React from 'react';

const Dashboard = ( props ) => {
    return (
      <div className="container">
        <div className= 'count-nav center'>
          <button  data-testid='hit-button' className= 'btn btn-large green' onClick={props.handleHit}>Hit</button>
          <button data-testid='strike-button' className= 'btn btn-large red'onClick={props.handleStrike}>Strike</button>
          <button data-testid='ball-button' className= 'btn btn-large blue' onClick={props.handleBall}>Ball</button>
          <button data-testid='foul-button' className= 'btn btn-large yellow' onClick={props.handleFoul}>Foul</button>
        </div>
      </div>
    );
}

export default Dashboard;