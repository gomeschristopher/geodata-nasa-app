import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppService } from './app.service';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'geodata-nasa';
  isLoading = false;
  errMsg: string;
  article: Article;
  environmentData = environment;

  constructor(private appService: AppService) {}

  getArticle() {
    this.isLoading = true;
    this.appService.getArticleData()
    .subscribe(articleData => {
      this.article = articleData;
      this.isLoading = false;
    }, err => {
      console.log(err);
      this.errMsg = err;
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    this.getArticle();
  }
  
  
}
