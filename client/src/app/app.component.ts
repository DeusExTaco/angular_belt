import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  pets: any = [];

  single: any = {
    desc: '',
    title: ''
  };
  newPet: any = {
    title: '',
    desc: ''
  };
  editedPet: any = {
    title: '',
    desc: ''
  };
  showForm: boolean;
  editId: any = '';
  showDetails: boolean;

  errors = [];
  success = '';

  constructor(private HTTP: HttpService) {
  }

  ngOnInit() {
  }

  getPets() {
    const observable = this.HTTP.getPets();
    observable.subscribe(data => {
      this.pets = data;
    });
  }

  onButtonClickGetAll(): void {
    this.getPets();
  }

  getPetById(id) {
    const observable = this.HTTP.getPetById(id);
    observable.subscribe(data => {
      this.single = data;
    });
  }

  onButtonClickGetOne(id: string): void {
    this.showDetails = true;
    this.getPetById(id);
  }

  deletePet(id) {
    const observable = this.HTTP.deletePet(id);
    observable.subscribe(data => {
      this.getPets();
      this.success = 'successful delete';
    });
  }

  onButtonClickDelete(id: string): void {
    this.deletePet(id);
  }

  createPet(pet) {
    const observable = this.HTTP.createPet(pet);
    observable.subscribe((data: any) => {
      console.log(data);
      console.log('in app.compoent');
      this.getPets();
      // this.newPet = {title: '', desc: ''};
      if (data.err) {
        console.log('this was an error', data);
        this.errors = data.errors;
      } else {
        console.log('this was a success', data);
        this.success = 'you created a message';
      }
    });

  }

  updatePet(id, pet) {
    const observable = this.HTTP.updatePet(id, pet);
    observable.subscribe(data => {
      this.getPets();
    });
    this.showForm = false;
  }

  onButtonClickUpdate(id, pet): void {
    this.showForm = true;
    this.editedPet = {
      title: pet.title,
      desc: pet.desc
    };
    this.editId = id;
  }

  onButtonClickCancelEdit(): void {
    this.showForm = false;
    this.editedPet = {
      title: '',
      desc: ''
    };
    this.editId = '';
  }

}

