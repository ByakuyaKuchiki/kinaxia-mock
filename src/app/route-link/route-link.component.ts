import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-route-link',
  templateUrl: './route-link.component.html',
  styleUrls: ['./route-link.component.css']
})
export class RouteLinkComponent {

  @Input() name: string;
  @Input() path: string;

  constructor() { }

}
