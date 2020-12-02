import { Component, VERSION } from "@angular/core";
import { BitcoinService } from "./bitcoin.service";
import { AuthService } from "./auth.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  email: string;
  password: string;
  authService: any;


  constructor(public bitcoinService: BitcoinService, authService: AuthService) {

    loginWithEmail(){
    this.authService.loginWithEmail(this.email, this.password);
    this.email = this.password = "";
  }
   loginWithGoogle(){
    this.authService.loginWithGoogle();
  }

  logout(){
    this.authService.logout();
  }

   }

}
