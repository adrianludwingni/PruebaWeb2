import { Component } from '@angular/core';
import { InformacionComponent } from "../../components/informacion/informacion.component";
import { CardsComponent } from "../../components/cards/cards.component";
import { CategoriaComponent } from "../../components/categoria/categoria.component";
import { PuntuacionComponent } from "../../components/puntuacion/puntuacion.component";

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [InformacionComponent,  PuntuacionComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}
