import LineFriend from "./line_friend";
import LineMessage from "./line_message";
import YoutubeFeed from "./youtube_feed";

class YoutubeFeedDeliver {
  private _youtubeFeed: YoutubeFeed

  constructor(youtubeFeed: YoutubeFeed) {
    this._youtubeFeed = youtubeFeed
  }

  async deliver() {
    if (!this._youtubeFeed.isLucas() || !this._youtubeFeed.isNess()) {
      return
    }

    const lineUserIds: string[] = await LineFriend.testLineUserIds()
    const messages: any = [{
      type: "text",
      text: this._youtubeFeed.link
    }]
    new LineMessage().multicast(
      lineUserIds,
      messages,
    )
  }
}

export default YoutubeFeedDeliver
