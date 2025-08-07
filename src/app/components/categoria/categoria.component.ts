import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {
  categories = [
    { 
      id: 1, 
      name: "Deportivos", 
      image: "https://d2j3yrjisvcegg.cloudfront.net/EC/mg-news/2020/05/2GPOGC8uHfP8g6etSGhE.jpg",
      description: "Autos de alta velocidad y diseño aerodinámico."
    },
    { 
      id: 2, 
      name: "Clásicos", 
      image: "https://www.novacredit.com.ec/wp-content/uploads/2024/04/ford-mustang-clasico-electrico-scaled.webp",
      description: "Vehículos icónicos que marcaron época."
    },
    { 
      id: 3, 
      name: "Eléctricos", 
      image: "https://www.gaceta.unam.mx/wp-content/uploads/2021/09/210923-aca2-des-f1-cochese-electricos.jpg",
      description: "Tecnología sostenible y cero emisiones."
    },
    { 
      id: 4, 
      name: "Gama baja", 
      image: "https://farm2.staticflickr.com/1684/25420974531_d141d7faac_b.jpg",
      description: "Tecnología sostenible y cero emisiones."
    },
    { 
      id: 5, 
      name: "Gama media", 
      image: "https://coches193.wordpress.com/wp-content/uploads/2013/08/peugeot-508.jpg",
      description: "Tecnología sostenible y cero emisiones."
    },
    { 
      id: 6, 
      name: "Gama Alta", 
      image: "https://www.canalcar.es/build/images/comparador/comparativa-coches-alta-gama.3037c6cb.jpg",
      description: "Tecnología sostenible y cero emisiones."
    },
  ];
}
