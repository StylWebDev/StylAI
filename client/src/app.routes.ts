import { Routes } from '@angular/router';
import {HomeComponent} from "./app/views/home/home.component";
import {ChatComponent} from "./app/views/chat/chat.component";

export const routes: Routes = [
    {
      path: "",
      component: HomeComponent
    },
    {
      path: "chat",
      component: ChatComponent
    },
    {
      path: "**",
      redirectTo: ""
    }
  ];
