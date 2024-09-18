import { AfterViewInit, Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit {

  constructor() {
    // Asignar el token en el constructor
    (mapboxgl as any).accessToken = 'pk.eyJ1Ijoic2RpZWc4MiIsImEiOiJjbTE4MXozZnUwenlhMnFwczI1ZGhjZHljIn0.HPMbk532neYWTj-1VQAy4Q';
  }

  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
}
