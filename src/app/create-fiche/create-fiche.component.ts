import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-fiche',
  templateUrl: './create-fiche.component.html',
  styleUrls: ['./create-fiche.component.css']
})
export class CreateFicheComponent {

  select1: string[];
  select2: string[];
  select3: string[];
  select4: string[];
  select5: string[];
  name: string = 'Liste des fiches';
  path: string = 'listeFiche';

  constructor(private router: Router) {
    this.select1 = ['text1', 'text2', 'text3', 'text4'];
    this.select2 = ['text1', 'text2', 'text3', 'text4'];
    this.select3 = ['text1', 'text2', 'text3', 'text4'];
    this.select4 = ['text1', 'text2', 'text3', 'text4'];
    this.select5 = ['text1', 'text2', 'text3', 'text4'];
  }

  onSubmit(form: any): void {
    this.router.navigateByUrl('createFiche2Component');
  }

}
