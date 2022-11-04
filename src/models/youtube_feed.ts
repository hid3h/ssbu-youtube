class YoutubeFeed {
  private _title: string
  private _link: string
  private _youtubeId: string

  constructor(item: any) {
    this._title = item["title"]
    this._link = item["link"]
    this._youtubeId = item["id"]
  }
}

export default YoutubeFeed;
