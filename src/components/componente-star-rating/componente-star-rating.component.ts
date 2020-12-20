import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-componente-star-rating',
  templateUrl: './componente-star-rating.component.html',
  styleUrls: ['./componente-star-rating.component.scss'],
})
export class ComponenteStarRatingComponent implements OnInit {
  @Input() rating: number;
  // notasIniciais = ['star-outline', 'star-half-outline', 'star'];
  notasIniciais = ['star', 'star', 'star', 'star', 'star'];
  constructor() { }

  ngOnInit() {}

}
