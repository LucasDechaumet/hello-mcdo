import { Component } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-bar',
  imports: [CommonModule, FormsModule, SelectModule, ButtonModule],
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.scss',
})
export class AppBarComponent {
  mcdoList: any[] | undefined;

  selectedMcdo: any | undefined;
  currentUrl: string = '';

  constructor(private router: Router) {
    this.currentUrl = this.router.url;

    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
    });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
