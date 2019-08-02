import React from 'react';
import './EnvironmentOverview.css';

function EnvironmentItem(props) {
    return(
      <div className="environment-item">
        <span className="environment-item-label">{ props.label }</span>
        <span className="environment-item-value">{ props.value }</span>
      </div>
    );
  }

class EnvironmentOverview extends React.Component {

    render() {
        console.log(this.props);
        let {temp, humi, pres, light} = this.props.env;
        return (
            <div className="environment-overview container-flex">
                <EnvironmentItem label={<i class="icofont-sunny-day-temp"> Temperature</i>} value={`${temp}°C`} />
                <EnvironmentItem label={<i class="icofont-water-drop"> Humidity</i>} value={`${humi} %`} />
                <EnvironmentItem label={<i class="icofont-arrow-down"> Pressure</i>} value={`${pres} hPa`} />
                <EnvironmentItem label={<i class="icofont-light-bulb"> Light</i>} value={`${light} mLux`} />
            </div>
        );
    }
}

export default EnvironmentOverview;
