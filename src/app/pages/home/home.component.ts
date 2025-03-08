import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ButtonModule, AccordionModule, TagModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  loading: boolean = false;

  infoList = [
    { text: 'Script non actif', color: 'var(--p-red-500)' },
    {
      text: "Abonnement actif jusqu'au 02/04/2025",
      color: 'var(--p-green-500)',
    },
    {
      text: '1500 / 1500 Hello-Mcdo mensuel effectués',
      color: 'var(--p-red-500)',
    },
    {
      text: 'Dernier Hello-Mcdo : 12/03/2024 14:32',
      color: 'var(--p-green-500)',
    },
  ];

  statsList = [
    { text: '5478 Hello-Mcdo effectués', color: 'var(--p-green-500)' },
    { text: '23 Hello-Mcdo échoués', color: 'var(--p-red-500)' },
    { text: 'Taux de succès : 99.5%', color: 'var(--p-green-500)' },
    {
      text: 'Temps moyen par Hello-Mcdo : 3.2 sec',
      color: 'var(--p-green-500)',
    },
  ];

  constructor() {}

  startScript() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }
}
