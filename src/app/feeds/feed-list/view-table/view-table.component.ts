import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-feeds-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss']
})
export class ViewTableComponent implements OnInit {

  get displayedColumns(): string[] {
    return ["name"];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
