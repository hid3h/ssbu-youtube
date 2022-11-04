import type { NextApiRequest, NextApiResponse } from "next";
import Parser from "rss-parser"
import YoutubeFeedDeliver from "../../models/youtubefeed_deliver";
import YoutubeFeed from "../../models/youtube_feed";

const pubsub = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  // TODO: リクエスト検証

  if (method == "GET") {
    return res.status(200).send(req.query["hub.challenge"])
  }

  if (method != "POST") {
     return res.status(404).json({message: "error"})
  }

  const parser = new Parser();
  const feed = await parser.parseString(req.body)
  const item = new YoutubeFeed(feed.items[0])
  console.log("item", item)

  new YoutubeFeedDeliver(item).deliver()

  res.status(200).json({tes: "ok"});
};

export default pubsub;
