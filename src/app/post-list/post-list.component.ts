import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styles: []
})
export class PostListComponent implements OnInit {

@Input() postList:Array <Object>;
  constructor() { }

  ngOnInit() {
  }

}
