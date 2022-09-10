import { FlushSystemEntity } from "@water-calc"
import { useMutation } from "react-query"

export const createDescarga = (descarga: FlushSystemEntity) => {
  return Promise.resolve({
    id: Date.now(),
    name: descarga.name,
    type: descarga.type,
    image: descarga.image,
  })
}

export const useCreateDescarga = () => {
  return useMutation(createDescarga)
}
