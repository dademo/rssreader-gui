declare type FeedAuthor = {
    id          : number,
    name        : string | null,
    email       : string | null,
}

declare type FeedImage = {
    id          : number,
    url         : string | null,
    title       : string | null,
}

declare type FeedCategory = {
    id          : number,
    category    : string,
}

declare type FeedEnclosure = {
    id          : number,
    url         : string | null,
    length      : string | null,
    type        : string | null,
}

declare type FeedItem = {
    id          : number,
    author      : FeedAuthor | null,
    image       : FeedImage | null,
    categories  : FeedCategory[],
    enclosures  : FeedEnclosure[],
    feed        : Feed | null,
    title       : string,
    description : string | null,
    content     : string | null,
    link        : string | null,
    updated     : Date | null,
    published   : Date | null,
    guid        : string | null,
}

declare type HttpFeedItem = {
    id          : number,
    author      : FeedAuthor,
    image       : FeedImage,
    categories  : FeedCategory[],
    enclosures  : FeedEnclosure[],
    feed        : HttpFeed | null,
    title       : string,
    description : string | null,
    content     : string | null,
    link        : string | null,
    updated     : string | null, // date
    published   : string | null, // date
    guid        : string | null,
}

declare type Feed = {
    id          : number,
    author      : FeedAuthor | null,
    image       : FeedImage | null,
    categories  : FeedCategory[],
    items       : FeedItem[] | null,
    title       : string | null,
    description : string | null,
    link        : string | null,
    feedLink    : string | null,
    updated     : Date | null,
    published   : Date | null,
    language    : string | null,
    copyright   : string | null,
    generator   : string | null,
    lastUpdate  : Date,
}

declare type HttpFeed = {
    id          : number,
    author      : FeedAuthor | null,
    image       : FeedImage | null,
    categories  : FeedCategory[],
    items       : HttpFeedItem[] | null,
    title       : string,
    description : string | null,
    link        : string | null,
    feedLink    : string | null,
    updated     : string | null, // date
    published   : string | null, // date
    language    : string | null,
    copyright   : string | null,
    generator   : string | null,
    lastUpdate  : string, // date
}

export {
    FeedAuthor,
    FeedImage,
    FeedCategory,
    FeedEnclosure,
    FeedItem,
    HttpFeedItem,
    Feed,
    HttpFeed,
}