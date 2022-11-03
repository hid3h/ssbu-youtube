import LinebotEventSource from "./linebot_event_source"

const LinebotEvent = class {
  type: string
  source: typeof LinebotEventSource
  occurredAt: Date

  constructor(type: string, source: any, occurredAt: Date) {
    this.type = type
    this.source = source
    this.occurredAt = occurredAt
  }

  static new_via_webhook(event: any) {
    return new LinebotEvent(
      event["type"],
      LinebotEventSource.new_via_webhook(event["source"]),
      new Date(event["timestamp"])
    )
  }

  isFollow(): boolean {
    return this.type == "follow"
  }
}

export default LinebotEvent;
