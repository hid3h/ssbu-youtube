import { Prisma } from "@prisma/client";
import { prisma } from "../server/db/client";

const LineFriend = class {
  static async become(linebot_event_source: any) {
    try {
      await prisma.line_friends.create({
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
      console.log("become error", e)
      throw e
    }
  }

  static async testLineUserIds() {
    const line_friends = await prisma.line_friends.findMany()
    return line_friends.map((line_friend) => {
      return line_friend.line_user_id
    })
  }

  static async testLineUserFirstId() {
    const line_friend = await prisma.line_friends.findFirst()
    return line_friend?.line_user_id
  }
}

export default LineFriend;
