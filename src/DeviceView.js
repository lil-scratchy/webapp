import React from 'react';
import './App.css';

import AirQualityOverview from './AirQualityOverview';
import EnvironmentOverview from './EnvironmentOverview';

class DeviceView extends React.Component {

  render() {
    let deviceId = this.props.match.params.id;
    
    return (
      <div className="app-view">
        <div className="view-title">
          <h1>Device with ID {deviceId}</h1>
        </div>
        <div className="app-content">
          <AirQualityOverview></AirQualityOverview>
          <EnvironmentOverview></EnvironmentOverview>
          <div>
            <img src={process.env.PUBLIC_URL + '/Skala_oxy.jpg'} alt="Graph1" />
            <img src={process.env.PUBLIC_URL + '/Temperatur.jpg'} alt="Graph2" />
          </div>
        </div>
      </div>
    );
  }
}

export default DeviceView;
