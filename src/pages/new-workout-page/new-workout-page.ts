import { Component } from '@angular/core';
import { Map } from '../../components/map/map';
import { ManageTypeOfWorkoutService } from '../../services/manageTypeOfWorkout/manage-type-of-workout-service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-new-workout-page',
  imports: [Map],
  templateUrl: './new-workout-page.html',
  styleUrl: './new-workout-page.scss'
})
export class NewWorkoutPage implements OnInit {
  typeOfWorkout:string = "";

  ngOnInit(): void {
    this.typeOfWorkout = this.manageTypeOfWorkoutService.exportTypeOfWorkout()
  }
  constructor(private manageTypeOfWorkoutService : ManageTypeOfWorkoutService){}
}
