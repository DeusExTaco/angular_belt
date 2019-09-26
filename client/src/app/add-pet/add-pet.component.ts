import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  errors = [];
  newPet: any = {
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
  }

  goHome() {
    this.router.navigate(['/']);
  }

  createPet(pet) {
    const observable = this.HTTPService.createPet(pet);
    observable.subscribe((data: any) => {
      console.log(data);
      if (data.err) {
        console.log('this was an error', data);
        this.errors = data.errors;
      } else {
        console.log('this was a success', data);
        this.goHome();
      }
    });
  }
}
