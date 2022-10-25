import type { NextApiRequest, NextApiResponse } from "next";

const test = async (req: NextApiRequest, res: NextApiResponse) => {
  
  res.status(200).json({tes: "ok"});
};

export default test;
