import { createAccount } from "~~/domains/account/service"

export default defineEventHandler(async (event) => {
  return createAccount(await useBody(event))
})
