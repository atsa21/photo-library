export interface PhotoRequestModel {
  id: string;
  author: string;
  width: number;
  height: number;
  author_url: string;
  download_url: string;
}

export interface PhotoModel {
  id: string;
  author: string;
  url: string;
  thumbUrl: string;
}