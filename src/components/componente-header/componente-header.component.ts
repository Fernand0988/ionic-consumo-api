import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {UserAuthService} from '../../services/user-auth/user-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-componente-header',
  templateUrl: './componente-header.component.html',
  styleUrls: ['./componente-header.component.scss'],
})
export class ComponenteHeaderComponent implements OnInit {
  @Input() titulo: string;
  @Input() visibilidadeBotaoVoltar: string;
  @Input() mostrarMenu: string;
  constructor(private location: Location,
              private userAuthService: UserAuthService,
              private router: Router) { }

  ngOnInit() {}
  retornar() {
    this.location.back();
  }
  logout(): void {
    this.userAuthService.logout().then(() => {
      this.router.navigateByUrl('login');
    });
  }
}
