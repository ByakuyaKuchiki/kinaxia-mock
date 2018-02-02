import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-fiche',
  templateUrl: './create-fiche.component.html',
  styleUrls: ['./create-fiche.component.css']
})
export class CreateFicheComponent {

  select1: string[];
  select3: string[];
  select4: string[];
  select5: string[];
  name: string = 'Liste des fiches';
  path: string = 'listeFiche';

  constructor(private router: Router) {
    this.select1 = ['Andrea SALAS FLORE', 'SUPERVISEUR Releve'];
    this.select3 = ['Gestion prive Desjardin', 'Service et Operation', '306 UdeM'];
    this.select4 = ['Financement--Consommation', 'Financement--Hypothecaire'];
    this.select5 = ['Ghita BAKKOU', 'Haretuzha DA SILVA COSTA', 'Ida Stephanie RAMDE'];
  }

  onSubmit(form: any): void {
    this.router.navigateByUrl('createFiche2Component');
  }
  
  redirect(): void {
    this.router.navigateByUrl('listeFiche');
  }

}
