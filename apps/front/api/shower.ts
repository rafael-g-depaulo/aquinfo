import { ShowerEntity } from "@water-calc"
import { useQuery } from "react-query"
import { api } from "."

export const getShower = (id: number) =>
  api.get<ShowerEntity>(`/showers/${id}`).then((res) => res.data)
// .then(tranform)
export const getShowers = () =>
  api.get<ShowerEntity[]>("/showers").then((res) => res.data)
// .then((a) => a.map(tranform))

export const useShower = (id: number) =>
  useQuery(`showers/${id}`, () => getShower(id))
export const useShowers = () => useQuery(`showers`, getShowers)
