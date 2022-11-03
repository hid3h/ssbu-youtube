import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";


const webhook = async (req: NextApiRequest, res: NextApiResponse) => {
  const channelSecret = process.env.LINE_CHANNEL_SECRET || "";
  const { headers, body } = req

  const signature = crypto
    .createHmac("SHA256", channelSecret)
    .update(JSON.stringify(body))
    .digest("base64");

  if (signature != headers["x-line-signature"]) {
    return res.status(401)
  }

  res.status(200).json({tes: "ok"});
};

export default webhook;
