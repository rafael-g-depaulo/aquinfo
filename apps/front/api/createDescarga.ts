import { FlushSystemEntity } from "@water-calc"
import { useMutation, useQueries, useQuery } from "react-query"
import { api } from "."

const tranform = (a: any): FlushSystemEntity => ({
  id: a.id,
  image: a.imageUrl,
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

export const createDescarga = (descarga: FlushSystemEntity) => {
  // const formData = new FormData()

  // formData
  // return api.post("/flushes/create", )
  return Promise.resolve({
    id: Date.now(),
    name: descarga.name,
    type: descarga.type,
    image: descarga.image,
  })
}

export const useDescarga = (id: number) =>
  useQuery(`flushes/${id}`, () => getDescarga(id))
export const useDescargas = () => useQuery(`flushes`, getDescargas)

export const useCreateDescarga = () => {
  return useMutation(createDescarga)
}
