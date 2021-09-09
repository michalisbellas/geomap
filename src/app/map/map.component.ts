import {AfterViewInit, Component} from '@angular/core';
import * as L from 'leaflet';
import poi from './pois-thessaloniki.json';
import perifereies from './perifereies.json';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {

    // Initialize leaflet map and center it to Thessaloniki
    this.map = L.map('map', {
      center: [40.6512524, 22.9110079],
      zoom: 13
    });

    // Load a map layer
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, ' +
        'and the GIS User Community'
    }).addTo(this.map);

    // Place a marker
    L.marker([40.6512524, 22.9110079], L.icon).addTo(this.map);

    // Add POIs
    L.geoJSON(poi.features).addTo(this.map);
    // Add regions
    L.geoJSON(perifereies.features).addTo(this.map);
  }
}
