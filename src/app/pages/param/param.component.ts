import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePicker } from 'primeng/datepicker';
import { AccordionModule } from 'primeng/accordion';
import { Slider } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { FluidModule } from 'primeng/fluid';

@Component({
  selector: 'app-param',
  imports: [
    FormsModule,
    FloatLabelModule,
    InputTextModule,
    InputNumberModule,
    DatePicker,
    AccordionModule,
    Slider,
    ButtonModule,
    FluidModule,
  ],
  templateUrl: './param.component.html',
  styleUrl: './param.component.scss',
})
export class ParamComponent {
  amountOfHelloMcdo: number | undefined;
  mcdoNumber: number | undefined;
  openingTime: Date | undefined;
  closingTime: Date | undefined;
  closingDate: Date | undefined;
  minDate: Date = new Date();
  maxDate: Date | undefined;
  closeDates: Date[] = [
    new Date(2021, 0, 1),
    new Date(2021, 0, 2),
    new Date(2021, 0, 3),
  ];
  surplaceSlider: number = 50;
  emporterSlider: number = 50;
  driveSlider: number = 50;
  livraisonSlider: number = 50;
  clickCollectSlider: number = 50;
  buttonLoading: boolean = false;

  constructor() {}

  save() {
    this.buttonLoading = true;
    setTimeout(() => {
      this.buttonLoading = false;
    }, 2000);
  }
}
