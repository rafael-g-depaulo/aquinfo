import { useMutation } from "react-query"

type DescargaVazaoOptionsType = {
  seconds: number,
  totalWaterCost: number
}

export type DescargaType = {
  name: string,
  type: DescargaVazaoOptionsType[],
  image: File | null
}

export const createDescarga = (descarga: DescargaType) => {
    return Promise.resolve({id: 123, name: "Dual Flush", type: [], image: null});
}

export const useCreateDescarga = () => {
    return useMutation(createDescarga);
}