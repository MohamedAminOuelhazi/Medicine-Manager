import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  menuOpen: boolean = false; // State to track the visibility of the mobile menu

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Toggle the menu state
  }

}
