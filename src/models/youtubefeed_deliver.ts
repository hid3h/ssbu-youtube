import LineFriend from "./line_friend";
import LineMessage from "./line_message";
import YoutubeFeed from "./youtube_feed";

class YoutubeFeedDeliver {
  private _youtubeFeed: YoutubeFeed

  constructor(youtubeFeed: YoutubeFeed) {
    this._youtubeFeed = youtubeFeed
  }

  async deliver() {
    let lineUserIds: string[] = []

    if (this._youtubeFeed.isLucas()) {
      lineUserIds = await LineFriend.testLineUserIds()
    }

    if (this._youtubeFeed.isNess() || this._youtubeFeed.isSora()) {
      lineUserIds = [await LineFriend.testLineUserFirstId() || ""]
    }

    if (!lineUserIds.length) {
      return
    }

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
