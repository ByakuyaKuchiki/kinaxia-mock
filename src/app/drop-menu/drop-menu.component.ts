import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drop-menu',
  templateUrl: './drop-menu.component.html',
  styleUrls: ['./drop-menu.component.css']
})
export class DropMenuComponent {

  @Input() name: string;
  @Input() menus: any[];
  
  constructor() { }

}
