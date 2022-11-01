import type { NextApiRequest, NextApiResponse } from "next";

const test = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("req.headers", req.headers)
  console.log("req.method", req.method)
  console.log("req.body", req.body)

  res.status(200).json({tes: "ok"});
};

export default test;
