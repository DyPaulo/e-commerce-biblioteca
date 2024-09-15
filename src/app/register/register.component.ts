import { Component, inject } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { NgxMaskDirective } from "ngx-mask";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { SERVER_URL } from "../env";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    NgxMaskDirective,
    ReactiveFormsModule,
    RouterLink,
    MatSnackBarModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  snackbar = inject(MatSnackBar);

  form = this.fb.group({
    "cpf": ['', Validators.required],
    "password": ['', Validators.required],
    "email": ['', Validators.required],
    "credential": ['8080', Validators.required],
  });

  register() {
    const url = `${SERVER_URL}/api/register`;

    this.http.post(url, this.form.getRawValue()).subscribe(data => {
      this.snackbar.open("Usuário criado com sucesso!", "Fechar", {
        duration: 4000,
        verticalPosition: 'top'
      });
      this.router.navigate(['/login']);
    });
  }
}
