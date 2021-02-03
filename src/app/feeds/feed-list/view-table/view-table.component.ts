import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/feeds/data-model';
import { FeedsReaderService } from 'src/app/feeds/services/feeds-reader.service';

@Component({
  selector: 'app-view-feeds-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss']
})
export class ViewTableComponent implements OnInit {

  private _isLoading: boolean = false;
  get isLoading(): boolean {
    return this._isLoading;
  }

  private _loadedFeeds: Feed[] = [];
  get loadedFeeds(): Feed[] {
    return this._loadedFeeds;
  }

  get displayedColumns(): string[] {
    return ["name"];
  }

  constructor(
    private feedsReaderService: FeedsReaderService) { }

  ngOnInit(): void {
    this.loadFeeds();
  }

  private loadFeeds() {
    this._isLoading = true;
    this.feedsReaderService.listFeeds(null)
      .subscribe(feeds => {
        this._isLoading = false;
        this._loadedFeeds = feeds;
      });
  }

}
