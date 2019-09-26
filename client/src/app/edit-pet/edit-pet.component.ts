import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  errors = [];
  editedPet: any = {
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
      this.getPetById(params.id);
    });
  }

  getPetById(id) {
    const observable = this.HTTPService.getPetById(id);
    observable.subscribe(data => {
      this.editedPet = data;
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }

  updatePet(id, pet) {
    const observable = this.HTTPService.updatePet(id, pet);
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

// observable.subscribe(data => {
//   this.router.navigate(['/editOne/' + id + '/edit']);
//   // this.goHome();
// });