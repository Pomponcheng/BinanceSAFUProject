import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { SubmitPageComponent } from './submit-page/submit-page.component';
import { QueryPageComponent } from './query-page/query-page.component';

const appRoutes: Routes = [

{path: '', component:HomePageComponent, pathMatch: 'full'},
{path: 'submit', component:SubmitPageComponent},
{path: 'query', component:QueryPageComponent},

];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);