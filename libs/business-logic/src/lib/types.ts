export type FlushSystemType = {
  seconds: number
  totalWaterCost: number
}

export type FlushSystemEntity = {
  id?: number
  name: string
  type: FlushSystemType[]
  image: File | null
}

export type ShowerEntity = {
  id?: number
  name: string
  waterPerMinute: number
  image: File | null
}
