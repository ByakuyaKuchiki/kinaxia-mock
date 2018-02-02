import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ctrl-interne',
  templateUrl: './ctrl-interne.component.html',
  styleUrls: ['./ctrl-interne.component.css']
})
export class CtrlInterneComponent implements OnInit {

  select1: string[]; // centre
  select3: string[]; // annee
  select4: string[]; // sous processus
  select5: string[]; // sous processus
  showResult: boolean = false;

  constructor() {
    this.select4 = ['', 'Financement--Consommation'];
    this.select1 = ['', 'Gestion prive Desjardin', 'Service et Operation', '306 UdeM'];
    this.select3 = ['2018'];
    // this.select5 = ['Ghita BAKKOU', 'Haretuzha DA SILVA COSTA', 'Ida Stephanie RAMDE'];
   }

  ngOnInit() {
  }

  onSubmit(value: string): void{
    if (value === 'Financement--Consommation') {
      this.showResult = true;
    }else{
      this.showResult = false;
    }
  }

}
