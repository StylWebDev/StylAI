import { Component } from '@angular/core';
import { HeaderComponent} from "./layouts/header/header.component";
import { FooterComponent } from './layouts/footer/footer.component';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FlexComponent} from "./display/flex/flex.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent, FlexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
