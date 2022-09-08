import { useMutation } from "react-query"

type DescargaVazaoOptionsType = {
  seconds: number,
  totalWaterCost: number
}

export type DescargaType = {
  id?: number,
  name: string,
  type: DescargaVazaoOptionsType[],
  timesPressed?: number,
  image: File | null
}

export const createDescarga = (descarga: DescargaType) => {
    return Promise.resolve({id: Date.now(), name: descarga.name, type: descarga.type, image: descarga.image});
}

export const useCreateDescarga = () => {
    return useMutation(createDescarga);
}