import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/common/services/error-handler.service';
import { Feed, FeedItem, HttpFeed, HttpFeedItem } from 'src/app/feeds/data-model';

@Injectable({
  providedIn: 'root'
})
export class FeedsReaderService {

  private readonly pathApi = "/api/feed";

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService) { }

  public listFeeds(filter: any): Observable<Feed[]> {

    const url = filter? this.makeFilter(filter) : this.pathApi;
    return this.http.get<HttpFeed[]>(url)
      .pipe(
        map(httpFeeds => this.mapFeeds(httpFeeds)),
        tap({
          error: this.errorHandler.buildErrorHandler("Unable to fetch feed list")
        })
      );
    }

  public getFeedItems(feedId: number) {

  }

  private makeFilter(filter: any): any { // TODO
    const url = new URL(`${this.pathApi}/filter`);
    return url.href;
  }

  private mapFeeds(httpFeedList: HttpFeed[]): Feed[] {
    return httpFeedList.map(httpFeedList => this.mapFeed(httpFeedList));
  }

  private mapFeed(httpFeed: HttpFeed): Feed {
    return {
      id          : httpFeed.id,
      author      : httpFeed.author,
      image       : httpFeed.image,
      categories  : httpFeed.categories,
      items       : httpFeed.items ? this.mapFeedItems(httpFeed.items) : null,
      title       : httpFeed.title,
      description : httpFeed.description,
      link        : httpFeed.link,
      feedLink    : httpFeed.feedLink,
      updated     : httpFeed.updated ? new Date(httpFeed.updated) : null,
      published   : httpFeed.published ? new Date(httpFeed.published) : null,
      language    : httpFeed.language,
      copyright   : httpFeed.copyright,
      generator   : httpFeed.generator,
      lastUpdate  : new Date(httpFeed.lastUpdate),
    };
  }

  private mapFeedItems(httpFeedItemsList: HttpFeedItem[]): FeedItem[] {
    return httpFeedItemsList.map(feedItem => this.mapFeedItem(feedItem));
  }

  private mapFeedItem(httpFeedItem: HttpFeedItem): FeedItem {
    return {
      id          : httpFeedItem.id,
      author      : httpFeedItem.author,
      image       : httpFeedItem.image,
      categories  : httpFeedItem.categories,
      enclosures  : httpFeedItem.enclosures,
      feed        : httpFeedItem.feed ? this.mapFeed(httpFeedItem.feed) : null,
      title       : httpFeedItem.title,
      description : httpFeedItem.description,
      content     : httpFeedItem.content,
      link        : httpFeedItem.link,
      updated     : httpFeedItem.updated ? new Date(httpFeedItem.updated) : null,
      published   : httpFeedItem.published ? new Date(httpFeedItem.published) : null,
      guid        : httpFeedItem.guid,
    };
  }
}
