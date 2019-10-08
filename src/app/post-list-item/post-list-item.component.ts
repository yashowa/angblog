import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styles: []
})
export class PostListItemComponent implements OnInit {

@Input() positem:object;
  constructor() { }

  ngOnInit() {
  }
  getClass(nbLOv){
    if(nbLOv>0){
      return 'list-group-item-success';
    }
    return 'list-group-item-danger'
  }
  updateLove(nblove){
    this.positem['loveits']+=nblove;
  }
}
