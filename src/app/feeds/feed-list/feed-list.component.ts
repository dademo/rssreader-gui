import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';

enum DisplayType {
  Table = 'table',
  Grid = 'grid',
}

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {

  
  get display(): DisplayType {
    return this.displayTypeGroup?.value;
  }

  @ViewChild(MatButtonToggleGroup, { static: true })
  private displayTypeGroup: MatButtonToggleGroup | undefined;

  constructor() { }

  ngOnInit(): void {
    // TODO : use stored configuration
    if(this.displayTypeGroup) {
      this.displayTypeGroup.value = DisplayType.Table;
    }
  }

}
