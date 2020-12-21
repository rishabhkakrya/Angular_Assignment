import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onClick(input: string) {
    let index = +input; //1-based index
    if (index % 2 == 0)
      alert(index * index - 1)
    else
      alert(index * index + 1);
  }
}
