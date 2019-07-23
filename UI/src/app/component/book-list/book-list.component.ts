import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    of(this.dataService.getAll('https://localhost:5001/api/Books').subscribe(books => {
      this.books = books;
    })); 
  }
}
