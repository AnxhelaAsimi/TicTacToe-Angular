import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.sass']
})
export class ButtonBarComponent {
  @Input() winner : number | null = null;
  
}
