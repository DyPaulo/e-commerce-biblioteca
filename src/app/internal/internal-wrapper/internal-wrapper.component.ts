import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { MatToolbar } from "@angular/material/toolbar";

@Component({
  selector: 'app-internal-wrapper',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbar,
    RouterLink
  ],
  templateUrl: './internal-wrapper.component.html',
  styleUrl: './internal-wrapper.component.scss'
})
export class InternalWrapperComponent { }
