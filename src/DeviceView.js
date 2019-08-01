import React from 'react';
import './App.css';

import AirQualityOverview from './AirQualityOverview';
import EnvironmentOverview from './EnvironmentOverview';

class DeviceView extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    let deviceId = this.props.match.params.id;
    return (
      <div className="app">
        <header className="app-header">
          <img src={process.env.PUBLIC_URL + '/logo.png'} width="100px" height="100px" alt="logo"></img>
          <ul className="view-selector">
            <li>Overview</li>
            <li className="selected">Device A</li>
            <li>Device C</li>
            <li>Device D</li>
          </ul>
        </header>
        <div className="view-title">
          <h1>Device {deviceId}</h1>
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

export default DeviceView;
