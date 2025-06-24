import { Component } from '@angular/core';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { History } from '../../components/history/history';
@Component({
  selector: 'app-workout-page',
  imports: [NavBar, History],
  templateUrl: './workout-page.html',
  styleUrl: './workout-page.scss'
})
export class WorkoutPage {

}
