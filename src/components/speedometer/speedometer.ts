import { Component } from '@angular/core';

@Component({
  selector: 'app-speedometer',
  imports: [],
  templateUrl: './speedometer.html',
  styleUrl: './speedometer.scss'
})
export class Speedometer {
  changeButton:boolean = true;
  stopBtn:boolean = false;
  speedElement:number = 0;
  speedUnit:string = "KM/H";
  watchId:any = null;

  startSpeedometer(){
    //Mudar o estado do botão
    this.changeButton = false;
    
    //Começo a capturar a localização
      this.watchId = navigator.geolocation.watchPosition((position)=>{
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      if(position.coords.speed != null){
        //Recebo o valor da velocidade, multiplico por 3.6 para converter de m/s para km/h, e ajusto para apenas uma casa decimal
        this.speedElement = parseInt((position.coords.speed * 3.6).toFixed(1));
      }
      else{
        this.speedElement = 0;
      }

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
    //Mudar o estado do botão
    this.changeButton = true;

    navigator.geolocation.clearWatch(this.watchId)
  }
}
