import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { CardsComponent } from "./cards/cards.component";

@Component({
  selector: 'app-main',
  imports: [HeroComponent, CardsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
