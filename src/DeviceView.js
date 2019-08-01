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
          <h1>Device {deviceId}</h1>
        </div>
        <div className="app-content">
          <AirQualityOverview></AirQualityOverview>
          <EnvironmentOverview></EnvironmentOverview>
        </div>
      </div>
    );
  }
}

export default DeviceView;
