import React from 'react';
import './AirQualityOverview.css';

class OverviewItem extends React.Component {
  render() {

    let grade;

    switch (this.props.grade) {
      case 1:
        grade = <i className="icofont-thumbs-down grade-bad"></i>;
        break;
      case 2:
        grade = <i className="icofont-thumbs-up grade-ok"></i>;
        break;
      case 3:
        grade = <i className="icofont-thumbs-up grade-good"></i>;
        break;
      default:
        grade = <i className="icofont-thumbs-up grade-good"></i>;
    }

    return (
      <div className="overview-item">
        <span className="overview-item-label">{this.props.label}</span>
        <span className="overview-item-value">{this.props.value}</span>
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
    console.log(this.props);
    let { partical_count, co2, tvoc, o2 } = this.props.aq;
    // TODO fix the grading
    return (
      <div className="container-flex">
        <OverviewItem label="Particle Count" value={partical_count + ""} grade={1} />
        <OverviewItem label="Organic Compunds" value={tvoc + " ppm"} grade={3} />
        <OverviewItem label="Carbon Dioxide" value={co2 + " ppm"} grade={2} />
        <OverviewItem label="Oxygen" value={o2 + " %"} grade={1} />
      </div>
    );
  }
}

export default AirQualityOverview;
