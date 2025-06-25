import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {
  
  constructor(private router: Router){}

  switchPage(value:string):void{
    if (value == "Início") {
      this.router.navigateByUrl("");
    }
    else if(value == "workout"){
      this.router.navigateByUrl("workout");
    }
    else if(value == "Histórico"){
      
    }
    else{

    }
  }
}
