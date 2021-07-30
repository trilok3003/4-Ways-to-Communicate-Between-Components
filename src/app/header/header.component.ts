import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  itemCount: number = 0;

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    // Set Product Count
    this.headerService.setCount.subscribe((msg: any) => {
      this.itemCount = (this.itemCount + (msg)) < 1 ? 0 : this.itemCount + (msg);
    })
  }

}