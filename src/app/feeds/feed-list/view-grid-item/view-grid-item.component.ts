import { Component, Input, OnInit } from '@angular/core';
import { Feed } from '../../data-model';

@Component({
  selector: 'app-view-grid-item',
  templateUrl: './view-grid-item.component.html',
  styleUrls: ['./view-grid-item.component.scss']
})
export class ViewGridItemComponent implements OnInit {

  @Input()
  feed: Feed | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  openLink(url: string | null | undefined): void {
    if (url) {
      window.open(url, "_blank");
    }
  }

}
