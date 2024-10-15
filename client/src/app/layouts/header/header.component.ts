import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FlexComponent} from "../../display/flex/flex.component";
import {NgOptimizedImage} from "@angular/common";

interface Route {
  id: number;
  name: string;
  href: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FlexComponent, NgOptimizedImage, RouterLinkActive],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  public routes: Route[] = [
    {id:1, name: 'Home', href: '/'},
    {id:2, name: 'ChatBot', href: '/chat'},
  ]
}
