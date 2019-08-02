import React from 'react';
import './AirQualityOverview.css';

class OverviewItem extends React.Component {
  render() {

    let grade;

    switch (this.props.grade) {
      case 1:
        grade = <i className="icofont-sad grade-bad grade"></i>;
        break;
      case 2:
        grade = <i className="icofont-slightly-smile grade-ok grade"></i>;
        break;
      case 3:
        grade = <i className="icofont-simple-smile grade-good grade"></i>;
        break;
      default:
        grade = <i className="icofont-simple-smile grade-good grade"></i>;
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

  gradeParticalCount(value) {
    if (value < 24) { //Perfekt
      return 3
    } else if (value >= 24 && value < 28) { //Ok
      return 2
    } else { // Bad
      return 1
    }
  }

  gradeTVOC(value) {
    if (value <= 14) { //Perfekt
      return 3
    } else if (value > 14 && value < 50) { //Ok
      return 2
    } else { // Bad
      return 1
    }
  }

  gradeCO2(value) {
    if (value <= 1000) { //Perfekt
      return 3
    } else if (value > 1000 && value < 1500) { //Ok
      return 2
    } else { // Bad
      return 1
    }
  }

  gradeOxygen(value) {
    if (value <= 18 || value > 40) { //bad
      return 1
    } else if (value > 19 && value < 40) { //Perfect
      return 3
    } else { // ok
      return 2
    }
  }

  render() {

    console.log(this.props);
    let { partical_count, co2, tvoc, o2 } = this.props.aq;

    return (
      <div className="container-flex">
        <OverviewItem label="Particle Count" value={partical_count + ""} grade={this.gradeParticalCount(partical_count)} />
        <OverviewItem label="Organic Compunds" value={tvoc + " ppm"} grade={this.gradeTVOC(tvoc)} />
        <OverviewItem label="Carbon Dioxide" value={co2 + " ppm"} grade={this.gradeCO2(co2)} />
        <OverviewItem label="Oxygen" value={o2 + " %"} grade={this.gradeOxygen(o2)} />
      </div>
    );
  }
}

export default AirQualityOverview;
