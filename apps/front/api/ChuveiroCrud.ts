// import { useMutation } from "react-query"
// import { api } from "."
// import axios from "axios"

// //post

// type Descarga = {
//   Modelo: string
//   Consumo: number
// }

// type Descargar_get = {
//   Id: number
//   Modelo: string
//   Consumo: number
// }

// async function PostDescarga() {
//   try {
//     const { data } = await axios.post<Descarga>(
//       "https://reqres.in/api/users", //rota?
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       },
//     )

//     console.log(JSON.stringify(data, null, 4))

//     return data
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.log("error message: ", error.message)
//       return error.message
//     } else {
//       console.log("unexpected error: ", error)
//       return "An unexpected error occurred"
//     }
//   }
// }

// PostDescarga()

// //get

// type GetDescargaResponse = {
//   data: Descargar_get[]
// }

// async function getDescarga() {
//   try {
//     const { data, status } = await axios.get<GetDescargaResponse>(
//       "https://reqres.in/api/users", //rota?
//       {
//         headers: {
//           Accept: "application/json",
//         },
//       },
//     )

//     console.log(JSON.stringify(data, null, 4))
//     console.log("response status is: ", status)

//     return data
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.log("error message: ", error.message)
//       return error.message
//     } else {
//       console.log("unexpected error: ", error)
//       return "An unexpected error occurred"
//     }
//   }
// }

// getDescarga()
// //delete

// type DeleteDescargaResponse = ""

// async function deleteDescarga() {
//   try {
//     const { data, status } = await axios.delete<DeleteDescargaResponse>(
//       "https://reqres.in/api/users/2", //rota
//       {
//         headers: {
//           Accept: "application/json",
//         },
//       },
//     )

//     console.log("response is: ", data)
//     console.log("response status is: ", status)

//     return data
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.log("error message: ", error.message)
//       return error.message
//     } else {
//       console.log("unexpected error: ", error)
//       return "An unexpected error occurred"
//     }
//   }
// }

// deleteDescarga()

// //put

// async function updateDescarga() {
//   try {
//     const { data } = await axios.put<Descarga>(
//       "https://reqres.in/api/users/2", //rota
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       },
//     )

//     console.log(JSON.stringify(data, null, 4))

//     return data
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.log("error message: ", error.message)
//       return error.message
//     } else {
//       console.log("unexpected error: ", error)
//       return "An unexpected error occurred"
//     }
//   }
// }

// updateDescarga()
