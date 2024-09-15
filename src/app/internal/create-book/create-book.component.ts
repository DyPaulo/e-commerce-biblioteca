import { Component, inject } from '@angular/core';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatOption, MatSelect } from "@angular/material/select";
import { NgForOf } from "@angular/common";
import { MatInput } from "@angular/material/input";
import { NgxMaskDirective } from "ngx-mask";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButton, MatFabButton } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { InternalService } from "../internal.service";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [
    MatFormField,
    MatSelect,
    MatOption,
    NgForOf,
    MatInput,
    MatLabel,
    NgxMaskDirective,
    ReactiveFormsModule,
    MatButton,
    RouterLink,
    MatFabButton,
    MatSnackBarModule
  ],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.scss'
})
export class CreateBookComponent {
  fb = inject(FormBuilder);
  service = inject(InternalService);
  snackbar = inject(MatSnackBar);
  form = this.fb.group({
    "title": ['', Validators.required],
    "author": ['', Validators.required],
    "publisher": ['', Validators.required],
    "price": ['', Validators.required],
    "description": ['', Validators.required],
    "page_count": ['', Validators.required],
    "stock": ['', Validators.required],
  });

  persistBook() {
    if(this.form.invalid) {
      console.log(this.form)
      return
    }

    this.service.persistBook(this.form.getRawValue()).subscribe(value => {
      this.snackbar.open("Livro criado com sucesso!", "Fechar", {
        duration: 4000,
        verticalPosition: 'top'
      });
    });
  }
}
