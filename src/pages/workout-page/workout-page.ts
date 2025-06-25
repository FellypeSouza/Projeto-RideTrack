import { Component } from '@angular/core';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { History } from '../../components/history/history';
import { TypeOfWorkouts } from '../../components/type-of-workouts/type-of-workouts';

@Component({
  selector: 'app-workout-page',
  imports: [NavBar,TypeOfWorkouts, History],
  templateUrl: './workout-page.html',
  styleUrl: './workout-page.scss'
})
export class WorkoutPage {

}
