import { Component } from '@angular/core';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { Speedometer } from '../../components/speedometer/speedometer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-speedometer-page',
  imports: [Speedometer, NavBar, FormsModule],
  templateUrl: './speedometer-page.html',
  styleUrl: './speedometer-page.scss'
})
export class SpeedometerPage {
  
}
