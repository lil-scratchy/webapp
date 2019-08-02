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
    name: loading_text,
    AirQuality: {
      partical_count: loading_text,
      tvoc: loading_text,
      co2: loading_text,
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
      console.log("Loading Data for " + this.props.match.params.id);
      axios.get(`${endpoint}/devices/${this.props.match.params.id}/data/latest`)
        .then(({data}) => {
          let newState = this.state;
          data.forEach(element => {
            // TODO adapt to best practices;
            switch (element.name) {
              case "temp":
                newState.Environment.temp = (element.value / 1000) - 6;
              break;
              case "humi":
                newState.Environment.humi = element.value;
                break;
              case "pres":
                newState.Environment.pres = element.value / 100;
                break;
              case "light":
                newState.Environment.light = element.value / 1000;
                break;
              case "mc25":
                newState.AirQuality.partical_count = element.value;
                break;
              case "tvoc":
                newState.AirQuality.tvoc = element.value;
                break;
              case "co2":
                newState.AirQuality.co2 = element.value;
                break;
              case "o2":
                newState.AirQuality.o2 =  (0.1 * ((element.value - 1350) / 50) + 20.90).toString().substring(0,5);
                break;
              default:
                ;
            }
          });
          this.setState({newState});
          console.log(data);
        })
    }, 1000);
    axios.get(`${endpoint}/devices/${props.match.params.id}/`)
      .then(({data: {name}}) => {
        this.setState({name});
      })
  }

  render() {
    let deviceName = this.state.name;
    
    return (
      <div className="app-view">
        <div className="view-title">
          <h1>{deviceName}</h1>
        </div>
        <div className="app-content">
          <AirQualityOverview aq={this.state.AirQuality}></AirQualityOverview>
          <EnvironmentOverview env={this.state.Environment}></EnvironmentOverview>
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
