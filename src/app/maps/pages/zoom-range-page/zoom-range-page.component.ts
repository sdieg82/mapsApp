import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environments';

@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css'
})
export class ZoomRangePageComponent implements AfterViewInit{
  
  @ViewChild('map') divMap?:ElementRef;

  ngAfterViewInit(): void {
    // Inicializar el mapa pasando el token directamente en el constructor
    if (!this.divMap)  throw 'El elemento no fue encontrado';

    const map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // ID del contenedor
      style: 'mapbox://styles/mapbox/streets-v12', // URL de estilo
      center: [-74.5, 40], // Posición inicial [lng, lat]
      zoom: 9, // Zoom inicial
      accessToken: environment.mapbox_key // Asignar el token aquí
    });
  }
}
