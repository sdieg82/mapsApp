import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environments';

@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit {



  @ViewChild('map') divMap?:ElementRef;

  ngAfterViewInit(): void {
    // Verificar si estamos en el navegador
    if (typeof window !== 'undefined' && this.divMap) {
      const map = new mapboxgl.Map({
        container: this.divMap.nativeElement, // ID del contenedor
        style: 'mapbox://styles/mapbox/streets-v12', // URL de estilo
        center: [-74.5, 40], // Posición inicial [lng, lat]
        zoom: 9, // Zoom inicial
        accessToken: environment.mapbox_key // Asignar el token aquí
      });
    }
  }
  
}

