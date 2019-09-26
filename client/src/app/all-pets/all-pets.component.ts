import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-pets',
  templateUrl: './all-pets.component.html',
  styleUrls: ['./all-pets.component.css']
})
export class AllPetsComponent implements OnInit {
  errors = [];
  pets: any = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private HTTPService: HttpService
  ) { }

  ngOnInit() {
    this.getPets();
  }
  getPets() {
    const observable = this.HTTPService.getPets();
    observable.subscribe((data: any) => {
      this.pets = data;
    });
  }

  deletePet(id) {
    const observable = this.HTTPService.deletePet(id);
    observable.subscribe(data => {
      this.getPets();
    });
  }

  onButtonClickDelete(id: string): void {
    this.deletePet(id);
  }

}

