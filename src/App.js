import React from 'react';
import './App.css';

import AirQualityOverview from './AirQualityOverview';
import EnvironmentOverview from './EnvironmentOverview';

class OverviewSelector extends React.Component {

  onClick() {

  }

  render() {
    return (
      <div className="view-selector">
        <div className="view-selector-selection icofont-simple-down" onClick={this.onClick}>
          {this.props.selected}
        </div>
        <ul className="view-selector-list">
          <li className="view-selector-item">Overview</li>
          <li className="view-selector-item">Device A </li>
          <li className="view-selector-item">Device C </li>
          <li className="view-selector-item">Device D </li>
        </ul>
      </div>
    );
  }
}

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={process.env.PUBLIC_URL + '/logo.png'} width="120px" height="120px" alt="logo"></img>
          <OverviewSelector selected="Overview"></OverviewSelector>
        </header>
        <div className="view-title">
          <h1>Overview</h1>
        </div>
        <div className="app-content">
          <AirQualityOverview></AirQualityOverview>
          <EnvironmentOverview></EnvironmentOverview>
        </div>
        <footer>
          Footer
        </footer>
      </div>
    );
  }
}

export default App;
