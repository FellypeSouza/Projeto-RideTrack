import { Routes } from '@angular/router';
import { ActivityDetailsPage } from '../pages/activity-details-page/activity-details-page';
import { SpeedometerPage } from '../pages/speedometer-page/speedometer-page';

export const routes: Routes = [
    {
        path: "",
        component: ActivityDetailsPage,
    },
    {
        path: "speedometer",
        component: SpeedometerPage,
    },
];
