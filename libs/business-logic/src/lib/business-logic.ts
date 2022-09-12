import { FlushSystemType, ShowerEntity } from "./types"

export function consumoBanhoLitro(chuveiro: ShowerEntity, tempo: number) {
  const time = tempo * chuveiro.waterPerMinute
  return time
}

export function consumoDescargaLitro(
  custo: FlushSystemType,
  quantidade: number,
) {
  const totalAgua = custo.totalWaterCost * quantidade
  return totalAgua
}

interface ProgressiveTarifInfo {
  start: number
  price: number
  end?: number
  maxCost?: number
}
const progressiveTarifs: ProgressiveTarifInfo[] = [
  {
    start: 0,
    price: 2.98,
  },
  {
    start: 8,
    price: 3.57,
  },
  {
    start: 14,
    price: 7.07,
  },
  {
    start: 21,
    price: 10.25,
  },
  {
    start: 31,
    price: 15.37,
  },
  {
    start: 45,
    price: 19.99,
  },
].map((tarif, i, arr) =>
  arr.length === i + 1
    ? tarif
    : {
        ...tarif,
        end: arr[i + 1].start,
        maxCost: arr[i + 1].start - tarif.start * tarif.price,
      },
)

export function gastoPorLitro(volumeLiters: number) {
  const volumeCubicMeters = volumeLiters / 1000

  let totalCost = 0

  for (const tarif of progressiveTarifs) {
    // ignore tarifs that start above the cost
    if (tarif.start > volumeCubicMeters) continue

    if (tarif.end < volumeCubicMeters) {
      totalCost += tarif.maxCost
    } else {
      totalCost += (volumeCubicMeters - tarif.start) * tarif.price
    }
  }

  return Math.trunc(totalCost * 100) / 100
}
