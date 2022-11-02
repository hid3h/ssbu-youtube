import type { NextApiRequest, NextApiResponse } from "next";

const test = async (req: NextApiRequest, res: NextApiResponse) => {
  const entry: any = {
    headers: req.headers,
    method: req.method,
    body: req.body
  }
  console.log(JSON.stringify(entry))

  res.status(200).json({tes: "ok"});
};

export default test;
