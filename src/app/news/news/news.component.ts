import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../angularmodels/news.model'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: News[];

  constructor(private newsService: NewsService) { }

  loading: boolean = false;
  
  ngOnInit() {
    this.loading = true;
    this.newsService.getNews().subscribe(data => {
      this.loading = false;
      this.news = data.map(e => {
        return {
          ...e.payload.doc.data() as News
        }
      })
    });
  }

}
