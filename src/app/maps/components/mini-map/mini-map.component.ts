import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import mapboxgl, { Marker } from 'mapbox-gl';
import { environment } from '../../../../environments/environments';
import { map } from 'rxjs';

@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit{
  @Input() lngLat?:[number,number]


  @ViewChild('map') divMap?:ElementRef; 
  ngAfterViewInit(){
    if(!this.divMap?.nativeElement) throw "LngLat can't be null"
    if(!this.lngLat) throw "LngLat can't be null"

    if (typeof window !== 'undefined' && this.divMap) {
      const map = new mapboxgl.Map({
        container: this.divMap.nativeElement, // ID del contenedor
        style: 'mapbox://styles/mapbox/streets-v12', // URL de estilo
        center: this.lngLat, // Posición inicial [lng, lat]
        zoom: 15, // Zoom inicial
        accessToken: environment.mapbox_key,
        interactive:false // Asignar el token aquí
      });
      new Marker()
      .setLngLat(this.lngLat)
      .addTo(map)
    }
   
    
  }

  
}
