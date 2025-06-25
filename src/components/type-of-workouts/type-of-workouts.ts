import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ManageTypeOfWorkoutService } from '../../services/manageTypeOfWorkout/manage-type-of-workout-service';

@Component({
  selector: 'app-type-of-workouts',
  imports: [RouterLink],
  templateUrl: './type-of-workouts.html',
  styleUrl: './type-of-workouts.scss'
})
export class TypeOfWorkouts {

  openTrainingPage(typeOfWorkout:string):void{

    this.manageTypeOfWorkoutService.receiveTypeOfWorkout(typeOfWorkout);
    
    if(typeOfWorkout == "Caminhada") {

      this.router.navigateByUrl("/newWorkout");
    }
    else if(typeOfWorkout == "Corrida"){
      this.router.navigateByUrl("/newWorkout");
    }
    else if(typeOfWorkout == "Ciclismo"){
      this.router.navigateByUrl("/newWorkout");
    }
    else{
      this.router.navigateByUrl("/newWorkout");
    }
  }
  constructor(private manageTypeOfWorkoutService : ManageTypeOfWorkoutService, private router : Router){}
}
