const LinebotEventSource = class {
  type: string
  userId: string

  constructor(type: string, userId: string) {
    this.type = type
    this.userId = userId
  }

  static new_via_webhook(source: any) {
    return new LinebotEventSource(
      source["type"],
      source["userId"],
    )
  }
}

export default LinebotEventSource;
