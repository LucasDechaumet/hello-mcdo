import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePicker } from 'primeng/datepicker';
import { AccordionModule } from 'primeng/accordion';
import { Slider } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { FluidModule } from 'primeng/fluid';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';

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
    ToastModule,
    CommonModule,
  ],
  templateUrl: './param.component.html',
  styleUrl: './param.component.scss',
  providers: [MessageService],
})
export class ParamComponent {
  amountOfHelloMcdo: number | undefined;
  mcdoNumber: number | undefined;
  openingTime: Date | undefined;
  closingTime: Date | undefined;
  closingDate: Date | undefined | null;
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
  buttonSaveLoading: boolean = false;
  @ViewChild('dp') datePicker: any;
  isDatepickerHidden: boolean = true;

  constructor(private messageService: MessageService) {}

  save() {
    this.buttonSaveLoading = true;
    setTimeout(() => {
      this.buttonSaveLoading = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Sauvegardée',
        detail: 'Votre configuration a bien été sauvegardée',
      });
    }, 2000);
  }

  onDateSelect(event: any) {
    this.isDatepickerHidden = true;
    setTimeout(() => {
      this.closingDate = null;
    }, 1);
    this.closeDates.push(event);
  }

  openDatepicker() {
    this.isDatepickerHidden = false;
    setTimeout(() => {
      this.datePicker.showOverlay();
      this.datePicker.cd.detectChanges();
    }, 1);
  }
}
