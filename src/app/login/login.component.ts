import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public authService: AuthService) {}

  loginWithEmail() {
    this.authService.loginWithEmail(this.email, this.password);
    this.email = this.password = "";
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }
  logout() {
    this.authService.logout();
  }

  ngOnInit() {}
}
