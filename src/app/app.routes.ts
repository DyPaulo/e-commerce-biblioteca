import { Router, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { inject } from "@angular/core";

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "internal",
    canActivate: [(route: any, state: any) => {
      const router: Router = inject(Router)
      const loggedIn = localStorage.getItem('user');

      if(!loggedIn) {
        router.navigate(['login'])
      }

      return true;
    }],
    loadChildren: () => import("./internal/internal.routes").then(r => r.INTERNAL_ROUTES)
  }
];
