import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  // Data binding
  // Event Binding

  user = {
    name: "Tho",
    age: 23
  };

  handler = evt => {
    console.log("Clicked", evt);
  };
}
