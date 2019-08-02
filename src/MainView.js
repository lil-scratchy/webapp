import React from 'react';

import AirQualityOverview from './AirQualityOverview';
import EnvironmentOverview from './EnvironmentOverview';

class MainView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="app-view">
                <div className="view-title">
                    <h1>Overview</h1>
                </div>
                <div className="app-content">
                    {/* <AirQualityOverview></AirQualityOverview>
                    <EnvironmentOverview></EnvironmentOverview> */}
                </div>
            </div>
        );
    }
}

export default MainView;
