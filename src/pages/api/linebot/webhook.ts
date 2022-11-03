import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import LinebotEvents from "../../../models/linebot_events";
import LineFriend from "../../../models/line_friend";

const webhook = async (req: NextApiRequest, res: NextApiResponse) => {
  const channelSecret = process.env.LINE_CHANNEL_SECRET || "";
  const { headers, body } = req

  const signature = crypto
    .createHmac("SHA256", channelSecret)
    .update(JSON.stringify(body))
    .digest("base64");

  if (signature != headers["x-line-signature"]) {
    return res.status(401).json({message: "error"})
  }

  const linebot_events = LinebotEvents.new_via_webhook(body["events"])
  const linebot_event = linebot_events.getEvents()[0]

  if (linebot_event.isFollow()) {
    LineFriend.become(linebot_event.source)
  } else if (linebot_event.isMessage()) {
    // LineFriend.become(linebot_event.source)
  }

  res.status(200).json({message: "ok"});
};

export default webhook;
