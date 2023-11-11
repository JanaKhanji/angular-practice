import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Post } from './post';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  url ='https://jsonplaceholder.typicode.com/posts';
  postList: Array<Post>;
  constructor(
    private httpClient: HttpClient
  ) {
    console.log('test1');
    this.httpClient.get(this.url).subscribe((results: Array<Post>) => {
      this.postList = results;
      console.log(this.postList);
    });
    console.log('test2')
  }
}
