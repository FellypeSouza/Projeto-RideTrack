import { Component } from '@angular/core';
import { Map } from '../../components/map/map';
import { ManageTypeOfWorkoutService } from '../../services/manageTypeOfWorkout/manage-type-of-workout-service';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-workout-page',
  imports: [Map, RouterLink],
  templateUrl: './new-workout-page.html',
  styleUrl: './new-workout-page.scss'
})
export class NewWorkoutPage implements OnInit {
  typeOfWorkout:string = "";
  statusButton: boolean = true;

  ngOnInit(): void {
    this.typeOfWorkout = this.manageTypeOfWorkoutService.exportTypeOfWorkout()
  }

  startNewWorkout():void{
    this.statusButton = false;
  }
  stopNewWorkout():void{
    this.statusButton = true;
  }

  constructor(private manageTypeOfWorkoutService : ManageTypeOfWorkoutService){}
}
