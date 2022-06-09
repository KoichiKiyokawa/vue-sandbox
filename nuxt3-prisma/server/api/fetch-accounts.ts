import { fetchAccounts } from "~~/domains/account/service"

export default defineEventHandler(async () => {
  return await fetchAccounts()
})
