import { Routes } from '@angular/router';
import { MainComponent } from './Componets/main/main.component';
import { MedicinesComponent } from './Componets/medicines/medicines.component';
import { GetComponent } from './Componets/medicines/get/get.component';

export const routes: Routes = [
    {path:'', component:MainComponent},
    {path:'home', component:MainComponent},
    {path:'medicine', component:MedicinesComponent},
    {path:'getmedicine', component:GetComponent}


];
