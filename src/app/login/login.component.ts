import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { NgxMaskDirective } from "ngx-mask";
import { Router, RouterLink } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { SERVER_URL } from "../env";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxMaskDirective,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  form = this.fb.group({
    "cpf": ['', Validators.required],
    "password": ['', Validators.required]
  });

  login() {
    const url = `${SERVER_URL}/api/login`

    this.http.post(url, this.form.getRawValue()).subscribe(user => {
      localStorage.setItem('user', JSON.stringify(user));

      this.router.navigate(["internal/report"])
    })
  }
}
