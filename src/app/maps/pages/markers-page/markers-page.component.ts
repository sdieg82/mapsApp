import { Component, ElementRef, ViewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environments';

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent {
  
  
  
  @ViewChild('map') divMap?:ElementRef;


  public zoom:number=10;
  public map?:mapboxgl.Map;
  public lngLat:mapboxgl.LngLatLike=new mapboxgl.LngLat(-78.5946468892165, -1.2564397873686346)

  ngAfterViewInit(): void {
    // Inicializar el mapa pasando el token directamente en el constructor
    if (typeof window !== 'undefined' && this.divMap) {
    if (!this.divMap)  throw 'El elemento no fue encontrado';

    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // ID del contenedor
      style: 'mapbox://styles/mapbox/streets-v12', // URL de estilo
      center: this.lngLat, // Posición inicial [lng, lat]
      zoom: this.zoom, // Zoom inicial
      accessToken: environment.mapbox_key // Asignar el token aquí
    });

    const marker=new mapboxgl.Marker({
      color:'white'
    })
    .setLngLat(this.lngLat)
    .addTo(this.map)
   
  }}

}
