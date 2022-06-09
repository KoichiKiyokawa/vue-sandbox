import { fetchAccountById } from "~~/domains/account/service"

type FetchAccountInput = {
  id: number
}

export default defineEventHandler(async (event) => {
  const body = await useBody<FetchAccountInput>(event)
  return fetchAccountById(body.id)
})
