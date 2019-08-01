import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import MainView from './MainView';
import DeviceView from './DeviceView';
import SettingsView from './SettingsView';

class App extends React.Component {

  onSelectedHandler(selection) {
    if (selection.id === 0) {
      window.location = '/';
    } else {
      window.location = '/device/' + selection.id;
    }
  }

  render() {

    return (
      <Router>
      <div className="app">
        <header className="app-header">
          <img src={process.env.PUBLIC_URL + '/logo.png'} width="80px" height="80px" alt="logo"></img>
          <ul className="view-selector">
            <li><Link to="/">Overview</Link></li>
            <li><Link to="/device/1">Device 1</Link></li>
            <li><Link to="/device/2">Device 2</Link></li>
            <li><Link to="/device/3">Device 3</Link></li>
            <li><Link to="/device/4">Device 4</Link></li>
          </ul>
        </header>

        
          <div>
            <Route exact path="/" component={MainView} />
            <Route path="/device/:id" component={DeviceView} />
            <Route path="/settings" component={SettingsView} />
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
