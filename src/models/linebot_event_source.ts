const LinebotEventSource = class {
  private _type: string
  private _userId: string

  constructor(type: string, userId: string) {
    this._type = type
    this._userId = userId
  }

  static new_via_webhook(source: any) {
    return new LinebotEventSource(
      source["type"],
      source["userId"],
    )
  }

  get userId(): string {
    return this._userId
  }
}

export default LinebotEventSource;
