import { Component } from '@angular/core';
import {FlexComponent} from "../../display/flex/flex.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FlexComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
