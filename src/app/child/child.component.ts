import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  name = "child"
  constructor(public headerService: HeaderService) { }

  @Input() title: string;

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {

    if (changes.title) {
      // MAKE HTTP CALL
      console.log('Get title');
    }
  }
  @Output() selectedMovie = new EventEmitter();

  SendSelectedMovie(movie) {
    this.selectedMovie.emit(movie);
  }
  add() {
    this.headerService.setCount.next(1);
  }

  remove() {
    this.headerService.setCount.next(-1);
  }
}