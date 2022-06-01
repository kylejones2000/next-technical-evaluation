export type AppleResponse = {
  resultCount: number;
  results: any[];
};

export type Media = {
  artistName: string;
  artistViewUrl: string;
  artworkUrl100: string;
  collectionName: string;
  trackId: string,
  trackName: string;
};

export type QueryParams = {
  searchTerm: string,
  offset: number,
  limit: number
};
