import { useMutation } from "react-query"

export function gastoPorLitroPorMês(litros):GLfloat {
  let metroCubico = litros/1000;
  let totalSum = 0;
  if (metroCubico > 45) {
    totalSum += (metroCubico-45)*19.99;
    metroCubico = 45;
  }
  if (metroCubico > 30) {
    totalSum += (metroCubico-30)*15.37;
    metroCubico = 30;
  }
  if (metroCubico > 20) {
    totalSum += (metroCubico-20)*10.25;
    metroCubico = 20;
  }
  if (metroCubico > 13) {
    totalSum += (metroCubico-13)*7.07;
    metroCubico = 13;
  }
  if (metroCubico > 7) {
    totalSum += (metroCubico-7)*3.57;
    metroCubico = 7;
  }
  if (metroCubico > 0) {
    totalSum += metroCubico*2.98;
  }

  return(parseFloat(totalSum.toFixed(2)));
}

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