import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPetComponent } from './components/add-pet/add-pet.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditPetComponent } from './components/edit-pet/edit-pet.component';
import { ModifyPetComponent } from './components/modify-pet/modify-pet.component';

const routes: Routes = [

  { path: '', component: DashboardComponent },
  { path: 'add', component: AddPetComponent},
  { path: 'edit', component: EditPetComponent },
  { path: 'edit/:id', component: EditPetComponent},
  { path: 'modify/:id', component: ModifyPetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
