import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { News } from '../angularmodels/news.model';

@Injectable({
	providedIn: 'root'
})
export class NewsService {

	constructor(private firestore: AngularFirestore) {

	}

	getNews() {
		return this.firestore.collection('news', ref => ref.orderBy('date', 'desc')).snapshotChanges();
	}

	createNews(news: News) {
		return this.firestore.collection('news').add(news);
	}

	updateNews(news: News) {
		delete news.id;
		this.firestore.doc('news/' + news.id).update(news);
	}

	deleteNews(newsId: string) {
		this.firestore.doc('news/' + newsId).delete();
	}
}
