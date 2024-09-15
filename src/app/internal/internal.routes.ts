import { Routes } from "@angular/router";
import { InternalWrapperComponent } from "./internal-wrapper/internal-wrapper.component";
import { ReportComponent } from "./report/report.component";
import { CreateBookComponent } from "./create-book/create-book.component";
import { RentBookComponent } from "./rent-book/rent-book.component";

export const INTERNAL_ROUTES: Routes = [
  {
    path: "",
    component: InternalWrapperComponent,
    children: [
      {
        path: "report",
        component: ReportComponent
      },
      {
        path: "create-book",
        component: CreateBookComponent
      },
      {
        path: "rent-book",
        component: RentBookComponent
      },
    ]
  }
]
