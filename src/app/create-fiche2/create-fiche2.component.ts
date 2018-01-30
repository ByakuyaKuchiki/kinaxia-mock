import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-fiche2',
  templateUrl: './create-fiche2.component.html',
  styleUrls: ['./create-fiche2.component.css']
})
export class CreateFiche2Component implements OnInit {

  select1: string[];
  constructor() {
    this.select1 = ['text1', 'text2', 'text3', 'text4'];
   }

  ngOnInit() {
  }

}
