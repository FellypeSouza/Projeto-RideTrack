import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageTypeOfWorkoutService {

  data:string = "";

  receiveTypeOfWorkout(type:string):void{
    this.data = type;
  }

  exportTypeOfWorkout():string{
    return this.data;

    
  }

  constructor() { }
}
