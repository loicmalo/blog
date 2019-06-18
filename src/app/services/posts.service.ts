import {Subject} from 'rxjs';
import {Post} from '../models/post.model';

export class PostsService {
  posts: Post[] = [
    new Post('Mon premier post', 'Lorem ipsum', 0, new Date()),
    new Post('Mon deuxième post', 'blablabla',0, new Date())
    ];
  postSubject = new Subject<Post[]>();

  emitPosts() {
    this.postSubject.next(this.posts.slice());
  }

  decreaseLoveIts(i: number) {
    this.posts[i].loveIts--;
    this.emitPosts();
  }

  increaseLoveIts(i: number) {
    this.posts[i].loveIts++;
    this.emitPosts();
  }

  removePost(i: number) {
    this.posts.splice(i, 1);
    this.emitPosts();
  }

  addPost(title: string, content: string) {
    const postObject = {
      title: '',
      content: '',
      loveIts: 0,
      created_at: new Date()
    };
    postObject.title = title;
    postObject.content = content;
    this.posts.push(postObject);
    this.emitPosts();

  }

}
