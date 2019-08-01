import React from 'react';
import './App.css';

class SettingsView extends React.Component {

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={process.env.PUBLIC_URL + '/logo.png'} width="100px" height="100px" alt="logo"></img>
          <a href="/#"><i class="icofont-arrow-left"></i>Back</a>
        </header>
        <div className="app-content">
          Settings
        </div>
        <footer>
          Footer
        </footer>
      </div>
    );
  }
}

export default SettingsView;
