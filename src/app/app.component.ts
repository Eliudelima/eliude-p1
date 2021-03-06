import { Component, VERSION } from "@angular/core";
import { BitcoinService } from "./bitcoin.service";


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  constructor(public bitcoinService: BitcoinService){}
  
  ngOninit(){}
}
