import React from 'react';

const Dashboard = ( props ) => {
    return (
      <div className="container">
        <div className= 'count-nav center'>
          <button className= 'btn btn-large green' onClick={props.handleHit}>Hit</button>
          <button className= 'btn btn-large red'onClick={props.handleStrike}>Strike</button>
          <button className= 'btn btn-large blue' onClick={props.handleBall}>Ball</button>
          <button className= 'btn btn-large yellow' onClick={props.handleFoul}>Foul</button>
        </div>
      </div>
    );
}

export default Dashboard;