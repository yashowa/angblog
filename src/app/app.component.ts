import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'angblog';
  list=[{
    title:'Mon premier post',
    content:'Lorem ipsum vae victis et caetera',
    loveits: 5,
    date: Date()
  },
  {
    title:'Mon deuxième post',
    content:'Lorem ipsum vae victis et caetera encore une fois',
    loveits: -1,
    date: Date()
  },
  {
    title:'Mon troisième post',
    content:'Lorem ipsum vae victis et caetera again x 3',
    loveits: 5,
    date: Date()
  }];
}
