import type { NextApiRequest, NextApiResponse } from "next";
import Parser from "rss-parser"

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
  console.log("feed", feed)

  const item = feed.items[0]
  console.log("item", item)

  // Hoge.deliver

  res.status(200).json({tes: "ok"});
};

export default pubsub;
