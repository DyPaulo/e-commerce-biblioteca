import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFabButton } from "@angular/material/button";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { NgForOf } from "@angular/common";
import { InternalService } from "../internal.service";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";

@Component({
  selector: 'app-rent-book',
  standalone: true,
  imports: [
    FormsModule,
    MatFabButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatSelectModule,
    NgForOf,
    MatSnackBarModule
  ],
  templateUrl: './rent-book.component.html',
  styleUrl: './rent-book.component.scss'
})
export class RentBookComponent implements OnInit{
  fb = inject(FormBuilder);
  service = inject(InternalService);
  snackbar = inject(MatSnackBar);
  form = this.fb.group({
    "book": ['', Validators.required],
    "document": ['', Validators.required],
  });
  availableBooks: any;

  ngOnInit() {
    this.service.getAvailableBooks().subscribe(books => this.availableBooks = books);
  }

  rentBook() {
    this.service.rentBook(this.form.getRawValue()).subscribe(book => {
      this.snackbar.open("Livro Alugado com sucesso!", "Fechar", {
        duration: 4000,
        verticalPosition: 'top'
      });
    });
  }
}
