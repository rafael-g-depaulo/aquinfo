/* eslint-disable @typescript-eslint/no-explicit-any */
import { FlushSystemEntity } from "@water-calc"
import { useMutation, useQuery } from "react-query"
import { api } from "."
import { Token } from "../contexts/UserToken"

const tranform = (a: any): FlushSystemEntity => ({
  id: a.id,
  imageUrl: a.imageUrl,
  name: a.name,
  type: a.flushTypes,
})

export const getDescarga = (id: number) =>
  api
    .get<FlushSystemEntity>(`/flushes/${id}`)
    .then((res) => res.data)
    .then(tranform)
export const getDescargas = () =>
  api
    .get<FlushSystemEntity[]>("/flushes")
    .then((res) => res.data)
    .then((a) => a.map(tranform))

export const createDescarga = (descarga: FlushSystemEntity, token: Token) => {
  const formData = new FormData()

  formData.set("name", descarga.name)
  formData.append("image", (descarga as any).image)
  for (let i = 0; i < descarga.type.length; i++) {
    formData.set(`flushTypes[${i}].seconds`, `${descarga.type[i].seconds}`)
    formData.set(
      `flushTypes[${i}].totalWaterCost`,
      `${descarga.type[i].totalWaterCost}`,
    )
  }

  return api.post("/flushes/create", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const useDescarga = (id: number) =>
  useQuery(`flushes/${id}`, () => getDescarga(id))
export const useDescargas = () => useQuery(`flushes`, getDescargas)

export const useCreateDescarga = (token: Token) => {
  return useMutation((props: FlushSystemEntity) => createDescarga(props, token))
}
