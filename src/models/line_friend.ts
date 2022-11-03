import { Prisma } from "@prisma/client";
import { prisma } from "../server/db/client";

const LineFriend = class {
  static become(linebot_event_source: any) {
    try {
      prisma.line_friends.create({
        data: {
          line_user_id: linebot_event_source.userId,
        }
      })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2002") {
          // レコードが生成されていればいいので既にある場合は何もしない
          return
        }
      }
      throw e
    }
  }
}

export default LineFriend;
