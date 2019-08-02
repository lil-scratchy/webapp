import React from 'react';

import AirQualityOverview from './AirQualityOverview';
import EnvironmentOverview from './EnvironmentOverview';
import axios from 'axios';
import "./MainView.css";

const loading_text = "...";
const endpoint = "http://35.157.193.102:8080";

const Station = ({id, name, temp, status, history}) => <div 
    style={{
        height: 400,
        width: 400,
        textAlign: "center",
}}
    onClick={()=>{
        history.push('/device/1');
    }}
>
    <div style={{
        marginLeft: 100,
        height: 200,
        width: 200,
        borderRadius: "50%",
        backgroundColor: "#09b36a",
        fontSize: 60,
        fontWeight: 200,
        color: "white",

    }}
    >
        <div style={{
            paddingTop: 50,
        }}>
            {temp} °C
        </div>
    </div>
    <div style={{
        fontSize: 30,
        fontWeight: 200,
        textAlign: "center"
    }}>
        {name}
    </div>

</div>

class MainView extends React.Component {
    state = {
        sunny: true,
        stations: [
            {
                name: "Loccioni",
                temp: 27,
            },
            {
                name: "DHBW",
                temp: 23,
            }
        ]
    }
    constructor(props) {
        super(props);
        setInterval(() => {
        axios.get(`${endpoint}/devices/1/data/latest`)
        .then(({data}) => {
          let newState = this.state;
          data.forEach(element => {
            // TODO adapt to best practices;
            switch (element.name) {
              case "light":
                this.setState({sunny: (element.value / 1000) > 100});
                break;
              default:
                ;
            }
          });
          this.setState({newState});
        })
    }, 1000);
    
    axios.get(`${endpoint}/devices/`)
      .then(({data}) => {
        console.log(data);
        this.setState({stations: data.map((elem) => ({id: elem.id, name: elem.name, temp: "??"}))});
        data.forEach(station => {
            axios.get(`${endpoint}/devices/${station.id}/data/latest`)
                .then(({data}) => {
                    data.forEach((elem) => {
                        switch (elem.name) {
                            case "temp":
                                this.setState({
                                    stations: this.state.stations.map((e) => {
                                        console.log(elem, e);
                                        return e.id == station.id ? {...e, temp: ((elem.value / 1000) - 6).toString().substr(0,4)} : e;
                                    })
                                });
                                console.log(elem.value)
                                break;
                            default:

                        }
                    });
        })
      });
    });
      // Now get current Temps
      

    }

    render() {
        let {sunny, stations} = this.state;
        return (
            <div className="app-view">
                <div className="view-title">
                    <h1>Overview</h1>
                </div>
                <div>
                    <div style={{fontSize: 80, fontWeight: 100, textAlign: "center"}}>It's a lovely, {sunny ? "sunny" : "cloudy"} day</div>
                    <div style={{marginTop: 40, marginLeft: 40, fontSize: 40, fontWeight: 100, textAlign: "center"}}>2 Stations operational:</div>
                    <div className="station-list">
                        {stations.map((p) => <Station history={this.props.history} {...p}></Station>)}

                    </div>
                </div>
            </div>
        );
    }
}

export default MainView;
