import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FlexComponent} from "../../display/flex/flex.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    FlexComponent
  ],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {
  public social = [
    {id:1, name: "Github", img: 'https://api.iconify.design/line-md:github-twotone.svg?color=%23EC4899&width=30', href: 'https://github.com/StylWebDev'},
    {id:2, name: "LinkedIn", img: 'https://api.iconify.design/line-md:linkedin.svg?color=%23EC4899&width=30', href: 'https://www.linkedin.com/in/konstantinos-stylianou-a4a95625b/'},
    {id:3, name: "StylsDev" ,img: 'https://api.iconify.design/line-md:laptop-twotone.svg?color=%23EC4899&width=30', href: "https://styls.pages.dev"}
  ]
}
