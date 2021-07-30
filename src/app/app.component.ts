import { Component, VERSION, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  selectedMovieName: string;

  @ViewChild(ChildComponent) child_ref_component: ChildComponent;
  onMovieSelection(movie: string) {
    this.selectedMovieName = movie;
  }
  constructor() {
    console.log(this.child_ref_component); // undefined
  }
  ngAfterViewInit(): void {
    console.log(this.child_ref_component.name); // OUTPUT 
  }
}
