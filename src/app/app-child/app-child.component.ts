import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-app-child',
  template: ``,
  standalone: false,
  templateUrl: './app-child.component.html',
  styleUrl: './app-child.component.css',
})
export class AppChildComponent {
  @Input() greetMessage!: string;
  constructor() {}
  ngOnInit() {}
}
