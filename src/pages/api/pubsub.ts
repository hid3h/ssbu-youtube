import type { NextApiRequest, NextApiResponse } from "next";

const pubsub = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  // TODO: リクエスト検証

  if (method == "GET") {
    return res.status(200).send(req.query["hub.challenge"])
  }

  if (method != "POST") {
    res.status(404)
  }

  const entry: any = {
    headers: req.headers,
    method: req.method,
    body: req.body
  }
  console.log(JSON.stringify(entry))

  res.status(200).json({tes: "ok"});
};

export default pubsub;
