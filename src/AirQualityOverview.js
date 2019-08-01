import React from 'react';
import './AirQualityOverview.css';

class OverviewItem extends React.Component {
  render() {

    let grade;

    switch (this.props.grade) {
      case 1:
        grade = <i class="icofont-thumbs-down grade-bad"></i>;
        break;
      case 2:
        grade = <i class="icofont-thumbs-up grade-ok"></i>;
        break;
      case 3:
        grade = <i class="icofont-thumbs-up grade-good"></i>;
        break;
      default:
        grade = <i class="icofont-thumbs-up grade-good"></i>;
    }

    return (
      <div className="overview-item">
        <span className="overview-item-label">{this.props.label}</span>
        <span className="overview-item-value">Scale: {this.props.value}</span>
        <span className="overview-item-grade">{grade}</span>
      </div>
    );
  }
}

class AirQualityOverview extends React.Component {

  render() {

    /*
    const devices = ['a', 'b', 'c', 'd'];

    const deviceList = devices.map((value, index, array) => {
      return (<li className="device-item"><span className="label">Device {value}</span><span className="grade"><i class="icofont-simple-smile"></i></span></li>);
    });*/

    return (
      <div className="container-flex">
        <OverviewItem label="Particulate Matter" value="1" grade={1} />
        <OverviewItem label="Carbon Dioxide" value="2" grade={2} />
        <OverviewItem label="Ozon" value="3" grade={3} />
        <OverviewItem label="Oxygen" value="1" grade={1} />
      </div>
    );
  }
}

export default AirQualityOverview;
