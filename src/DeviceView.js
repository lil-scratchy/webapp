import React from 'react';
import './App.css';

import AirQualityOverview from './AirQualityOverview';
import EnvironmentOverview from './EnvironmentOverview';
import axios from 'axios';

const loading_text = "...";
const endpoint = "http://35.157.193.102:8080";
var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

class DeviceView extends React.Component {
  state = {
    AirQuality: {
      partical: loading_text,
      co2: loading_text,
      ozon: loading_text,
      o2: loading_text,
    },
    Environment: {
      temp: loading_text,
      humi: loading_text,
      pres: loading_text,
      light: loading_text,
    }
  }

  constructor(props){
    super(props);
    setInterval(() => {
      console.log("Loading Data");
      axios.get(`${endpoint}/devices/${props.match.params.id}/`)
        .then((data) => {
          console.log(data);
        })
    }, 1000);
  }

  render() {
    let deviceId = this.props.match.params.id;
    
    return (
      <div className="app-view">
        <div className="view-title">
          <h1>Device with ID {deviceId}</h1>
        </div>
        <div className="app-content">
          <div>
            <img src={process.env.PUBLIC_URL + '/Skala_oxy.jpg'} alt="Graph1" />
            <img src={process.env.PUBLIC_URL + '/Temperatur.jpg'} alt="Graph2" />
          </div>
          <AirQualityOverview aq={this.state.AirQuality}></AirQualityOverview>
          <EnvironmentOverview env={this.state.Environment}></EnvironmentOverview>
        </div>
      </div>
    );
  }
}

export default DeviceView;
