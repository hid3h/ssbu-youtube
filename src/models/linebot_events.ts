import LinebotEvent from "./linebot_event";

const LinebotEvents = class {
  events: any

  constructor(events: typeof LinebotEvent[]) {
    this.events = events
  }

  static new_via_webhook(events: any) {
    const hoge = events.map((event: any) => {
      return LinebotEvent.new_via_webhook(event)
    })
    return new LinebotEvents(hoge)
  }

  getEvents() {
    return this.events
  }
}

export default LinebotEvents;
