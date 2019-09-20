import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompileTemplateMetadata } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private HTTP: HttpClient) {
  }

  getPets() {
    return this.HTTP.get('/pets');
  }

  getPetById(id) {
    return this.HTTP.get(`/pets/${id}`);
  }

  createPet(pet) {
    console.log('here in http.service');
    const petMap = {
      name: pet.name,
      type: pet.type,
      description: pet.description,
      skill_1: pet.skill_1,
      skill_2: pet.skill_2,
      skill_3: pet.skill_3
    };
    return this.HTTP.post('/pets/new', petMap);
  }

  deletePet(id) {
    return this.HTTP.delete(`/pets/${id}`);
  }

  updatePet(id, editedPet) {
    const petMap = {
      name: editedPet.name,
      type: editedPet.type,
      description: editedPet.description,
      skill_1: editedPet.skill_1,
      skill_2: editedPet.skill_2,
      skill_3: editedPet.skill_3
    };
    return this.HTTP.put(`/pets/${id}/edit`, petMap);
  }
}
