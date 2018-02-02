import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-synthese-centre',
  templateUrl: './synthese-centre.component.html',
  styleUrls: ['./synthese-centre.component.css']
})
export class SyntheseCentreComponent implements OnInit {

  years: number[];
  months: string[];
  trimestre: string[];
  periodeChoice = 0;
  periodeChoiceString = 'annuel';
  choiceYear: number;
  periodeSelection: string[];
  services: string[];
  finalValue: string;
  submited: boolean;
  choiceService = 'Ouverture de compte (Standard, NACC et tablette ensemble)';
  readyToSubmit = false;

  constructor() {
    this.years = [2018, 2017, 2016];
    this.months = ['janvier',	'février',	'mars',	'avril',	'mai',	'juin',	'juillet',	'août',	'septembre',	'octobre',	'novembre',	'décembre'];
    this.trimestre = ['trimestre 1', 'trimestre 2', 'trimestre 3', 'trimestre 4'];
    this.services = [
      'Ouverture de compte (Standard, NACC et tablette ensemble)',
      'Financement à la consommation',
      'Financement hypothécaire'
    ];
   }

  ngOnInit() {
  }

  loadSelection() {
    this.finalValue = null;
    this.choiceService = 'Ouverture de compte (Standard, NACC et tablette ensemble)';
    this.submited = false;
    switch (this.periodeChoice) {
      case 0:
        this.periodeChoiceString =  'annuel';
        this.readyToSubmit = true;
        break;
      case 1:
      this.periodeChoiceString =  'trimestriel';
        this.periodeSelection = this.trimestre;
        this.readyToSubmit = false;
        break;
      case 2:
      this.periodeChoiceString =  'mensuel';
        this.periodeSelection = this.months;
        this.readyToSubmit = false;
        break;
    }
  }

  setSubmission(): void {
    this.readyToSubmit = true;
  }

  onSubmit(any: any): void{
    this.submited = true;
  }

}
