import { Component } from '@angular/core';
import { RequestlibService } from '../Services/requestlib.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public username: string;
  public password: string;
  public hidden: boolean = true;

  constructor(private requestLib: RequestlibService, private router: Router) {
    // will be changed depends on where the IP
    // of the API server will be deployed.
    this.requestLib.setURI('http://localhost:5050');
  }

  login() {
    const credentails = {'username': this.username, 'password': this.requestLib.md5(this.password)};
    const accepted = (response) => {
      if (response['status'] == 200) {
        this.requestLib.setCookieValue('token', response['data']['token']);
        this.requestLib.initializeID(response['data']['id']);

        // redirect to another page
        this.router.navigate(['/landing']);
      }
    };

    const rejected = (response) => {
      this.hidden = false
    }

    this.requestLib.generateToken(credentails, accepted, rejected);
  }
}
