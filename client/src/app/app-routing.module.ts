import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPetsComponent } from './all-pets/all-pets.component';
import { DetailsPetComponent } from './details-pet/details-pet.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { PrefixNot } from '@angular/compiler';

const routes: Routes = [
  { path: 'getAll', component: AllPetsComponent},
  { path: 'getOne/:id', component: DetailsPetComponent },
  { path: 'addNew', component: AddPetComponent },
  { path: 'editOne/:id/edit', component: EditPetComponent },
  { path: '', pathMatch: 'full', redirectTo: '/getAll' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
