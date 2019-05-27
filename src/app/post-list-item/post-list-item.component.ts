import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle: string
  @Input() postContent: string
  @Input() postCreated_at: string
  @Input() postLoveIts: number

  constructor() { }

  ngOnInit() {
  }

  onDecrease() {
    this.postLoveIts--;
  }

  onIncrease() {
    this.postLoveIts++;

  }

  getLoveIts() {
    return this.postLoveIts;
  }
}
