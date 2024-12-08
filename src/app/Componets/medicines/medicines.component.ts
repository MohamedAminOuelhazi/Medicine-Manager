import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MedicineService } from '../../medicine.service';

@Component({
  selector: 'app-medicines',
  imports: [FormsModule],
  templateUrl: './medicines.component.html',
  styleUrl: './medicines.component.css'
})
export class MedicinesComponent {

  constructor(private medicineService: MedicineService) {}


  medicineName: string = '';
  doseOption: string = 'normal'; // valeur par défaut
  normalDose: number = 1; 
  dosePerDay = {
    monday: '1',
    tuesday: '1',
    wednesday: '1',
    thursday: '1',
    friday: '1',
    saturday: '1',
    sunday: '1'
  };


  // Méthode pour ajouter un médicament
  addMedicine() {
    const newMedicine = {
      name: this.medicineName,
      doseOption: this.doseOption,
      normalDose: this.doseOption === 'normal' ? this.normalDose : undefined,
      dosePerDay: this.doseOption === 'perDay' ? this.dosePerDay : undefined,
    };

    this.medicineService.addMedicine(newMedicine);
    console.log('Médicament ajouté:', newMedicine);
  }

  // Méthode pour récupérer les médicaments
  getMedicines() {
    const medicines = this.medicineService.getMedicines();
    console.log('Medicaments stockés:', medicines);
  }

}
