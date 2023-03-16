import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles:[
    `

 .mapa-container {
    height: 100%;
    width: 100%;
  }

  .row{
    background-color: white;
    position: fixed;
    border-radius: 5px;
    bottom: 50px;
    left: 50px;
    padding: 10px;
    z-index: 909999;
    display:flex;
    flex-direction:column;
    width: 11cm;


  }

  .lng-lat{
    margin-left: 1mm;
  }

  .numero{
    display:flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: 800px) {

    .row{
      width: 10cm;
    }

  }
    `
  ]
})

export class MainComponent implements OnInit {

  mapa!: mapboxgl.Map;
  zoomLeavel: number = 13;
  center: [ number, number ] = [ -109.00074462637237, 25.776604183004316 ]

  ngOnInit(): void {

    (mapboxgl as any).accessToken = environment.mapboxToken
    this.mapa= new mapboxgl.Map({
    container: 'mapa',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: this.center,
    zoom: 13
    })

    this.mapa.on('zoom', () => {
      this.zoomLeavel = this.mapa.getZoom()})

      this.mapa.on('zoomend', () => {
      if( this.mapa.getZoom() > 18)
        {this.mapa.zoomTo(18)}
      })

      this.mapa.on('move', (event) => {
        const target =event.target;
        const { lng , lat} = target.getCenter();
        this.center = [ lng , lat]
      })
  }

  zoomIn(){
    this.mapa.zoomIn()
  }
  zoomOut(){
    this.mapa.zoomOut()
  }

  zoomCambio( value: string){
   this.mapa.zoomTo( Number (value))
  }

}
