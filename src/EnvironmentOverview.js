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
        return (
            <div className="environment-overview container-flex">
                <EnvironmentItem label={<i class="icofont-sunny-day-temp"> Temperature</i>} value="40°C" />
                <EnvironmentItem label={<i class="icofont-water-drop"> Humidity</i>} value="30 %" />
                <EnvironmentItem label={<i class="icofont-arrow-down"> Pressure</i>} value="200 bar" />
                <EnvironmentItem label={<i class="icofont-light-bulb"> Light</i>} value="Day" />
            </div>
        );
    }
}

export default EnvironmentOverview;
