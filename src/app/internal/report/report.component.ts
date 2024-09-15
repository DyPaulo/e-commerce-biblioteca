import { Component, inject, OnInit } from '@angular/core';
import { MatTab, MatTabGroup, MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { MatChipsModule } from "@angular/material/chips";
import { InternalService } from "../internal.service";

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [
    MatTabsModule,
    MatTableModule,
    MatChipsModule
  ],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent implements OnInit {
  service = inject(InternalService)

  displayedColumns: string[] = ['title', 'author', 'publisher'];
  displayedColumns2: string[] = ['title', 'author', 'publisher', 'price'];
  dataSource = [{ title: 'Hydrogen', author: 1.0079, publisher: 'H' }];
  dataSource2 = [{ title: 'Hydrogen', author: 1.0079, publisher: 'H', price: '1000.00' }];

  ngOnInit() {
    this.service.getRentedBooks().subscribe((books: any) => this.dataSource = books);
    this.service.getSoldBooks().subscribe((books: any) => this.dataSource2 = books);
  }
}
