import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.scss'
})
export class Map implements AfterViewInit {
  private map: L.Map | undefined;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap():void{
    
  }
}
