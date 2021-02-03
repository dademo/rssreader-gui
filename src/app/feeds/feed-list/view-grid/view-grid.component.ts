import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/feeds/data-model';
import { FeedsReaderService } from 'src/app/feeds/services/feeds-reader.service';

@Component({
  selector: 'app-view-feeds-grid',
  templateUrl: './view-grid.component.html',
  styleUrls: ['./view-grid.component.scss']
})
export class ViewGridComponent implements OnInit {

  public readonly columnsCount = 4;

  private _isLoading: boolean = false;
  get isLoading(): boolean {
    return this._isLoading;
  }

  private _loadedFeeds: Feed[] = [];
  get loadedFeeds(): Feed[] {
    return this._loadedFeeds;
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
