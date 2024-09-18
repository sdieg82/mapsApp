import { AfterViewInit, Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environments';

@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Inicializar el mapa pasando el token directamente en el constructor
    const map = new mapboxgl.Map({
      container: 'map', // ID del contenedor
      style: 'mapbox://styles/mapbox/streets-v12', // URL de estilo
      center: [-74.5, 40], // Posición inicial [lng, lat]
      zoom: 9, // Zoom inicial
      accessToken: environment.mapbox_key // Asignar el token aquí
    });
  }
}

