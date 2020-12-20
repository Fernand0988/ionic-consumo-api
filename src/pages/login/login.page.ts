import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../../services/user-auth/user-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private userAuthService: UserAuthService,
              private router: Router) { }

  ngOnInit() {
  }
  async googleLogin(): Promise<void> {
    const result = await this.userAuthService.googleLogin();
  }
}
