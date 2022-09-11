export type FlushSystemType = {
  seconds: number
  totalWaterCost: number
}

export type FlushSystemEntity = {
  id?: number
  name: string
  type: FlushSystemType[]
  imageUrl?: string
}

export type ShowerEntity = {
  id?: number
  name: string
  waterPerMinute: number
  imageUrl?: string
}
