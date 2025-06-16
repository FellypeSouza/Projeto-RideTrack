import { Component } from '@angular/core';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-speedometer-page',
  imports: [NavBar, FormsModule],
  templateUrl: './speedometer-page.html',
  styleUrl: './speedometer-page.scss'
})
export class SpeedometerPage {
  changeButton:boolean = true;
  stopBtn:boolean = false;
  speedElement:number|null = 0;

  startSpeedometer(){
    this.changeButton = false;
    
    //Começo a capturar a localização
    navigator.geolocation.watchPosition((position)=>{
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      if(position.coords.speed != null){
        this.speedElement = position.coords.speed;
      }


      this.speedElement = position.coords.speed;
      console.log(`Latitude: ${latitude} Longitude: ${longitude}`);
    },
    (error)=>{
      console.log(error)
    },
    {
      enableHighAccuracy:true
    }
  )
  }
  stopSpeedometer(){
    this.changeButton = true;

    
  }
}
