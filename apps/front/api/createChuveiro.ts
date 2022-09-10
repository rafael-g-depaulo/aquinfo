import { ShowerEntity } from "@water-calc"
import { useMutation } from "react-query"

export const createChuveiro = (chuveiro: ShowerEntity) => {
  return Promise.resolve({
    id: Date.now(),
    name: chuveiro.name,
    waterPerMinute: chuveiro.waterPerMinute,
    image: chuveiro.image,
  })
}

export const useCreateChuveiro = () => {
  return useMutation(createChuveiro)
}
