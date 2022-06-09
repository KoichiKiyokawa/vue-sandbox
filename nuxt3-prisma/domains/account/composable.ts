export const useAccountById = (id: number) =>
  useFetch("fetch-account", { method: "post", body: { id } })
