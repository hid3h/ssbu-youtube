import LinebotEventSource from "./linebot_event_source"

const LinebotEvent = class {
  private _type: string
  private _source: typeof LinebotEventSource
  private _occurredAt: Date

  constructor(type: string, source: any, occurredAt: Date) {
    this._type = type
    this._source = source
    this._occurredAt = occurredAt
  }

  static new_via_webhook(event: any) {
    return new LinebotEvent(
      event["type"],
      LinebotEventSource.new_via_webhook(event["source"]),
      new Date(event["timestamp"])
    )
  }

  get source() {
    return this._source
  }

  isFollow(): boolean {
    return this._type == "follow"
  }

  isMessage(): boolean {
    return this._type == "message"
  }
}

export default LinebotEvent;
