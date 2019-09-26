import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-details-pet',
  templateUrl: './details-pet.component.html',
  styleUrls: ['./details-pet.component.css']
})
export class DetailsPetComponent implements OnInit {
  single: any = {
    name: '',
    type: '',
    description: '',
    skill_1: '',
    skill_2: '',
    skill_3: ''
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private HTTPService: HttpService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.getPetById(params.id);
    });
  }
  getPetById(id) {
    const observable = this.HTTPService.getPetById(id);
    observable.subscribe(data => {
      this.single = data;
    });
  }
  goHome() {
    this.router.navigate(['/']);
  }

  deletePet(id) {
    const observable = this.HTTPService.deletePet(id);
    observable.subscribe(data => {
      console.log('deleted succesfully');
      this.goHome();
    });
  }

  onButtonClickDelete(id: string): void {
    this.deletePet(id);
  }
}
