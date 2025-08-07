import { Component } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { PromocionComponent } from "../../components/promocion/promocion.component";

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CardsComponent, PromocionComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
