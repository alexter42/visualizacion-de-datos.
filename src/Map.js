import React, { Component } from 'react';
import './App.css';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';

import JSONdata from './data'

//solving leaflet issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

//end of solving

class App extends Component {

  componentDidMount() {
    let map = L.map(this.refs.map, { zoomControl: false });
    map.setView([23.8, -102.1], 5);

    let data = JSONdata;
    

    map.createPane('labels');
    map.getPane('labels').style.zIndex = 901;

    map.createPane('markers');
    map.getPane('markers').style.zIndex = 903;
    
    L.tileLayer('http://{s}.tiles.mapbox.com/v3/gvenech.m13knc8e/{z}/{x}/{y}.png', {
      attribution: '©OpenStreetMap, ©CartoDB',
    }).addTo(map);

    // Add a place to save markers
    let markers = {};
    // Loop through the data
    for (let i = 0; i < data.length; i++) {

      console.log(data[i]);
      let centroDeAcopio = data[i];
  
      // Create and save a reference to each marker
      markers[centroDeAcopio.id] = L.marker(centroDeAcopio.latLng, {
      
      title: centroDeAcopio.name,
      alt: centroDeAcopio.id,
      pane: 'markers',
      riseOnHover: true
      }).addTo(map);
    }

  }

  render() {
    return (
      <div
    className="App-body"
    id="map"
    ref="map"
  >Hello</div>
    );
  }
}

export default App;
