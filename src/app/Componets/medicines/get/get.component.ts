import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get',
  imports: [],
  templateUrl: './get.component.html',
  styleUrl: './get.component.css'
})
export class GetComponent implements OnInit {
  medicines: any[] = []; // Déclarez un tableau pour stocker les données récupérées

  ngOnInit(): void {
    this.loadMedicines();
  }

  loadMedicines(): void {
    // Récupérer les données depuis localStorage
    const storedMedicines = localStorage.getItem('medicines');
    
    if (storedMedicines) {
      // Convertir la chaîne JSON en tableau d'objets
      this.medicines = JSON.parse(storedMedicines);
    } else {
      // Si aucune donnée n'est trouvée dans localStorage, vous pouvez définir des données par défaut
      console.log('Aucune donnée trouvée dans localStorage');
    }
  }

  getDays(dosePerDay: any) {
    return [
      { day: 'Lundi', dose: dosePerDay.monday },
      { day: 'Mardi', dose: dosePerDay.tuesday },
      { day: 'Mercredi', dose: dosePerDay.wednesday },
      { day: 'Jeudi', dose: dosePerDay.thursday },
      { day: 'Vendredi', dose: dosePerDay.friday },
      { day: 'Samedi', dose: dosePerDay.saturday },
      { day: 'Dimanche', dose: dosePerDay.sunday },
    ];
  }
  
}