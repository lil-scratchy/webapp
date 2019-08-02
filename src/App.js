import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import MainView from './MainView';
import DeviceView from './DeviceView';
import SettingsView from './SettingsView';
import BackButton from './BackButton';
import DeviceSelector from './DeviceSelector';
import LegendView from './LegendView';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { selectedDevice: null, devices: [] };
    this.onSelectedHandler = this.onSelectedHandler.bind(this);
    this.onBackHandler = this.onBackHandler.bind(this);
    this.loadDevices();
  }

  loadDevices() {
    const update = this.state;
    update.devices = [{ id: 0, label: 'Device 1' }, { id: 1, label: 'Device 2' }, { id: 2, label: 'Device 3' }];
    this.setState(update);
  }

  onSelectedHandler(device) {
    this.setState({ selectedDevice: device });
  }

  onBackHandler() {
    this.setState({ selectedDevice: null });
  }

  render() {

    return (
      <Router>
        <div className="app">
          <header className="app-header">
            <img src={process.env.PUBLIC_URL + '/logo.png'} width="80px" height="80px" alt="logo"></img>
            <div className="app-menu">
              <BackButton onBack={this.onBackHandler} />
              <DeviceSelector selectedDevice={this.state.selectedDevice} onSelected={this.onSelectedHandler} devices={this.state.devices} />
              <div className="legend-link-container">
                <span className="legend-link">
                  <Link to="/legend"><i className="icofont-question-circle" /></Link>
                </span>
              </div>
            </div>
          </header>


          <div>
            <Route exact path="/" component={MainView} />
            <Route path="/device/:id" component={DeviceView} />
            <Route path="/settings" component={SettingsView} />
            <Route path="/legend" component={LegendView} />
          </div>

          <footer>
            Footer
        </footer>
        </div>
      </Router>
    );
  }
}

export default App;
