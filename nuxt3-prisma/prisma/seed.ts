import { db } from "../domains/core/util/db"

async function seed() {
  for (let i = 0; i < 10; i++) {
    await db.account.create({
      data: { username: `user${i}`, passwordHash: `pass${i}` },
    })
  }
}

seed()
