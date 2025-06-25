import { Routes } from '@angular/router';
import { ActivityDetailsPage } from '../pages/activity-details-page/activity-details-page';
import { WorkoutPage } from '../pages/workout-page/workout-page';
import { NewWorkoutPage } from '../pages/new-workout-page/new-workout-page';
import { SpeedometerPage } from '../pages/speedometer-page/speedometer-page';

export const routes: Routes = [
    //Página inicial
    {
        path: "",
        component: WorkoutPage,
    },
    {
        path: "newWorkout",
        component: NewWorkoutPage,
    },
];
