import { Injectable } from '@angular/core';


interface Medicine {
  name: string;
  doseOption: string;
  normalDose?: number;
  dosePerDay?: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
}


@Injectable({
  providedIn: 'root'
})

export class MedicineService {

  private storageKey = 'medicines';

  constructor() {}

  // Ajouter un médicament dans localStorage
  addMedicine(medicine: Medicine): void {
    const storedMedicines = this.getMedicines();
    storedMedicines.push(medicine);
    localStorage.setItem(this.storageKey, JSON.stringify(storedMedicines));
  }

  // Récupérer tous les médicaments depuis localStorage
  getMedicines(): Medicine[] {
    const storedMedicines = localStorage.getItem(this.storageKey);
    return storedMedicines ? JSON.parse(storedMedicines) : [];
  }

  // Supprimer un médicament depuis localStorage
  deleteMedicine(medicineName: string): void {
    const storedMedicines = this.getMedicines();
    const updatedMedicines = storedMedicines.filter((medicine: Medicine) => medicine.name !== medicineName);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedMedicines));
  }

}
