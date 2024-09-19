import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environments';

@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css'
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy{
  
  
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
    this.mapListeners();
  }}

  ngOnDestroy(): void {
    this.map?.on('move',()=>{
     this.map?.remove()
    })
  }
  mapListeners(){
    if(!this.map) throw 'Mapa no inicializado'
    this.map.on('zoom',(ev)=>{
      this.zoom=this.map!.getZoom()
    })

    this.map.on('zoomend',(ev)=>{
      if(this.map!.getZoom()<18) return;
      this.map!.zoomTo(18)

    })
    this.map.on('move',()=>{
      this.lngLat=this.map!.getCenter();
    })
  }

  zoomIn(){
      this.map?.zoomIn()
  }

  zoomOut(){
    this.map?.zoomOut()
  }
  zoomChanged(value:string){
    this.zoom=Number(value)
    this.map?.zoomTo(this.zoom)
  }
}
