import { Component } from '@angular/core';

@Component({
  selector: 'app-initial-page',
  imports: [],
  templateUrl: './initial-page.html',
  styleUrl: './initial-page.scss'
})
export class InitialPage {

  HistoryOfWorkouts:object[] = [];

  start():void{
    this.HistoryOfWorkouts.push(this.createWorkout(this.newId(), this.getStartTime()));

    console.log(this.HistoryOfWorkouts);
  }

  //Função que retorna o Identificador (Id) do treino
  newId():string{
    const id:string = Math.floor(Math.random() * 1000).toString();
    return id;
  }

  //Função que retorna a data e hora de criação de um novo treino
  getStartTime():string{
    const time:string = new Date().toLocaleString();
    return time
  }

  //Função que cria um novo treino
  createWorkout(id:string, time:string):object{
    return {
      id: id,
      startTime: time
    }
  }
}
