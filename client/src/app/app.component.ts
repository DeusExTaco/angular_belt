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

  deletePet(id) {
    const observable = this.HTTP.deletePet(id);
    observable.subscribe(data => {
      this.getPets();
    });
  }

  onButtonClickDelete(id: string): void {
    this.deletePet(id);
  }

}

