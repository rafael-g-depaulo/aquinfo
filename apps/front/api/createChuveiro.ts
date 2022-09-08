import { useMutation } from "react-query"

export type ChuveiroType = {
  id?: number,
  name: string,
  waterPerMinute: number,
  minutesPressed?: number,
  image: File | null
}

export const createChuveiro = (chuveiro: ChuveiroType) => {
    return Promise.resolve({id: Date.now(), name: chuveiro.name, waterPerMinute: chuveiro.waterPerMinute, image: chuveiro.image});
}

export const useCreateChuveiro = () => {
    return useMutation(createChuveiro);
}