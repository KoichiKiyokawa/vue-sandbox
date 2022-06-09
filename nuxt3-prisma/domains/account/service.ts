import { Account } from "@prisma/client"
import { db } from "../core/util/db"
import bcrypt from "bcryptjs"

export function fetchAccounts() {
  return db.account.findMany()
}

export function fetchAccountById(id: number) {
  return db.account.findUnique({ where: { id } })
}

export type CreateAccountInput = Pick<Account, "username"> & {
  password: string
}
export function createAccount({ username, password }: CreateAccountInput) {
  return db.account.create({
    data: { username, passwordHash: bcrypt.hashSync(password) },
  })
}
