import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards',
  imports: [ RouterLink ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {
    
  medicines: any[] = []; // Tableau pour stocker les médicaments
  countMedicines(): number {
    return this.medicines.length;
  }  
  count= this.countMedicines(); 

  ngOnInit(): void {
    this.loadMedicines();
  }

  loadMedicines(): void {
    // Récupérer les données depuis localStorage
    const storedMedicines = localStorage.getItem('medicines');
    
    if (storedMedicines) {
      // Convertir la chaîne JSON en tableau d'objets
      this.medicines = JSON.parse(storedMedicines);
    }
  }
 
   

  isDeleted = false;  // Pour gérer l'affichage du message de confirmation

  // Fonction pour supprimer 'medicine' de localStorage
  supp() {
    // Supprimer l'élément 'medicine' du localStorage
    localStorage.removeItem('medicines');

    // Mettre à jour l'état de suppression
    this.isDeleted = true;

    // Optionnel : cacher le message après un certain délai
    setTimeout(() => {
      this.isDeleted = false;
    }, 3000);  // Message caché après 3 secondes
  }
}
