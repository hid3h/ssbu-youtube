import { Client } from "@line/bot-sdk"

class LineMessage {
  private _client = new Client({
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN || ""
  })

  multicast(lineUserIds: string[], messages: any) {
    this._client.multicast(
      lineUserIds,
      messages,
    )
  }
}

export default LineMessage
