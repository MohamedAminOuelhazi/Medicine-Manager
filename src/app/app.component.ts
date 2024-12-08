import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Componets/header/header/header.component";
import { FooterComponent } from "./Componets/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,FooterComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'labes';
  
  
}
