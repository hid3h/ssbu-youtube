class YoutubeFeed {
  private _title: string
  private _link: string
  private _youtubeId: string

  constructor(item: any) {
    this._title = item["title"]
    this._link = item["link"]
    this._youtubeId = item["id"]
  }

  get link() {
    return this._link
  }

  isLucas(): boolean {
    const regexp = /リュカ|Lucas/;
    return regexp.test(this._title)
  }

  isNess(): boolean {
    const regexp = /ネス|Ness/;
    return regexp.test(this._title)
  }

  isSora(): boolean {
    const regexp = /ソラ|Sora/;
    return regexp.test(this._title)
  }
}

export default YoutubeFeed;
