import { Component, Input, OnInit } from '@angular/core';
import { AppChildComponent } from './app-child/app-child.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  template: ``,
})
export class AppComponent {
  title = 'my-angular-spa';
  message: string = "I am Parent";
  childmessage: string = "I am passed from Parent to child component"
  developerName:string ="Keerthana Ravishankar"
}
