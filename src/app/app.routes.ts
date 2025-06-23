import { Routes } from '@angular/router';
import { ActivityDetailsPage } from '../pages/activity-details-page/activity-details-page';
import { WorkoutPage } from '../pages/workout-page/workout-page';
import { SpeedometerPage } from '../pages/speedometer-page/speedometer-page';

export const routes: Routes = [
    //Página inicial, mostra o histórico dos treinos
    {
        path: "",
        component: ActivityDetailsPage,
    },
    //Página para iniciar um novo treino
    {
        path: "workout",
        component: WorkoutPage,
    },
    {
        path: "speedometer",
        component: SpeedometerPage,
    },
];
