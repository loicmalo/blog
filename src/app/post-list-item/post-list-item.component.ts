import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/post.model';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreated_at: string;
  @Input() postLoveIts: number;
  @Input() index: number;

  constructor(private postsServices: PostsService) { }

  ngOnInit() {
  }

  onDecrease() {
    this.postsServices.decreaseLoveIts(this.index);
  }

  onIncrease() {
    this.postsServices.increaseLoveIts(this.index);

  }

  onDelete() {
    this.postsServices.removePost(this.index);
  }
}
