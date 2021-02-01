import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-feeds-grid',
  templateUrl: './view-grid.component.html',
  styleUrls: ['./view-grid.component.scss']
})
export class ViewGridComponent implements OnInit {

  public readonly columnsCount = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
