import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss',
  '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class NewsComponent implements OnInit {

  constructor() { }
	loading: boolean = false;
  ngOnInit(): void {
  }

}
