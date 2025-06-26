import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  imports: [RouterLink],
  templateUrl: './map.html',
  styleUrl: './map.scss'
})
export class Map implements AfterViewInit {
  private map: L.Map | undefined;
  watchId:any = null;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap():void{
    //Função para acessar o valor de Latitude e Longitude
    this.watchId = navigator.geolocation.watchPosition((position)=>{
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      this.map = L.map('map').setView([latitude, longitude], 13); // São Paulo como exemplo
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);
  
      L.marker([latitude, longitude]).addTo(this.map)
        .bindPopup('Marcador em SP')
        .openPopup();

    }, 
    (error)=>{
      alert("Houve um erro");
      console.log(`Erro: ${error}`)
    }, {enableHighAccuracy: true})
    //

  }
}
