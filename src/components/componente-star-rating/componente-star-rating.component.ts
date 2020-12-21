import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-componente-star-rating',
  templateUrl: './componente-star-rating.component.html',
  styleUrls: ['./componente-star-rating.component.scss'],
})
export class ComponenteStarRatingComponent implements OnInit {
  @Input() rating: number;
  // notasIniciais = ['star-outline', 'star-half-outline', 'star'];
  notasIniciais = ['star-outline', 'star-outline', 'star-outline', 'star-outline', 'star-outline'];
  constructor() { }

  ngOnInit() {
    this.preencherNota(this.rating);
  }
  preencherNota(rating: number) {
    for (let i = 0; i < Math.floor(rating); i++) {
      this.notasIniciais[i] = 'star';
    }
    const valorArrendodado =  rating % 1;
    if (valorArrendodado > 0) {
      this.notasIniciais[Math.floor(rating)] = 'star-half-outline';
    }
  }
}
