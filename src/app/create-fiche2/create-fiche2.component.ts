import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-fiche2',
  templateUrl: './create-fiche2.component.html',
  styleUrls: ['./create-fiche2.component.css']
})
export class CreateFiche2Component {

  select1: string[];
  status = false;

  constructor(private router: Router) {
    this.select1 = ['text1', 'text2', 'text3', 'text4'];
   }

   clickSubmit(){
     this.status = true;
   }

   clickSubmitReverse(){
    this.status = false;
  }

   onSubmit(): void {
    // this.router.navigateByUrl('createFiche2Component');
    if (this.status) {
      this.router.navigateByUrl('listeFiche');
    }
  }
}
