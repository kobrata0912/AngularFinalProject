import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class News {
    id: string;
    date: {seconds: number, nanoseconds: number};
    title: string;
    description: Array<string>;
    pictures: Array<string>;
}