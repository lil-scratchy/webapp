import React from 'react';
import { withRouter } from 'react-router-dom'

import './DeviceSelector.css';

class DeviceSelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = { opened: false };
        this.toggleHandler = this.toggleHandler.bind(this);
        this.onSelectionHandler = this.onSelectionHandler.bind(this);
        this.onAddNewDevice = this.onAddNewDevice.bind(this);
    }

    toggleHandler() {
        this.setState({ opened: !this.state.opened });
    }

    onSelectionHandler(device) {
        this.props.history.push('/device/' + device.id);
        this.props.onSelected(device);
        this.toggleHandler();
    }

    onAddNewDevice(){
        //this.props.history.push('/device/add');
        alert('Feature will be added soon!');
        this.toggleHandler();
    }

    render() {
        const selectedDeviceLabel = this.props.selectedDevice ? this.props.selectedDevice.label : 'Select Device';
        const devices = this.props.devices;
        const selectionList = devices.map((device) => {
            return (<li key={device.id} onClick={() => { this.onSelectionHandler(device) }}>{device.label}</li>);
        });
        return (
            <div className="device-selector">
                <div className="device-selector-selection icofont-simple-down" onClick={this.toggleHandler}>
                    {selectedDeviceLabel}
                </div>
                {this.state.opened &&
                    <div className="device-selector-list">
                        <ul className="view-selector">
                            {selectionList}
                            <li onClick={this.onAddNewDevice}>Add Device</li>
                        </ul>
                    </div>
                }
            </div>
        );
    }
}

export default withRouter(DeviceSelector);
