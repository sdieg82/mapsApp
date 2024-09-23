import { Component, ElementRef, ViewChild } from '@angular/core';
import mapboxgl, { LngLat, Marker } from 'mapbox-gl';
import { environment } from '../../../../environments/environments';

interface MarkerColor{
  color:string;
  marker:mapboxgl.Marker;
}

interface PlainMarker{
  color:string;
  lngLati:number[]
}


@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent {
  
  
  
  @ViewChild('map') divMap?:ElementRef;


  public markers:MarkerColor[]=[];
  public zoom:number=13;
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

    //read localStorage
    this.readFromLocalStorage();

    // const marker=new mapboxgl.Marker({
      
    // })
    // .setLngLat(this.lngLat)
    // .addTo(this.map)
   
  }}

  createMarker(){
    if(!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lgnLat=this.map?.getCenter();
    this.addMarker(lgnLat,color);
  }

  addMarker(lngLat:LngLat,color:string){
    if(!this.map)return;
    const marker= new mapboxgl.Marker({
      color:color,
      draggable:true
    })
    .setLngLat(lngLat)
    .addTo(this.map);
    this.markers.push({
      color:color,
      marker:marker

    })
    this.savToLocalStorage()
  }

  deleteMarker(position:number){
    this.markers[position].marker.remove()
    this.markers.splice(position,1)
  }

  flyTo(marker:Marker){
    this.map?.flyTo({
        zoom:14,
        center:marker.getLngLat()
    })

  }

  savToLocalStorage(){
    const plainMarkers:PlainMarker[]=this.markers.map(({color,marker})=>{
      return {
        color,
        lngLati:marker.getLngLat().toArray()
      }
    });
    localStorage.setItem('plainMarkers',JSON.stringify(plainMarkers));
  }

  readFromLocalStorage(){
    const plainMarkersString=localStorage.getItem('plainMarkers') ?? '[]'
    const plainMarkers:PlainMarker[]=JSON.parse(plainMarkersString)
    plainMarkers.forEach(({color,lngLati})=>{
      const[lng,lat]=lngLati
      const coords=new LngLat(lng,lat)
      this.addMarker(coords,color)
    })
  }
}
