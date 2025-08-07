import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CardsComponent } from "./components/cards/cards.component";
import { CarruselComponent } from "./components/carrusel/carrusel.component";
import { InformacionComponent } from "./components/informacion/informacion.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-contactoDocente';
}
