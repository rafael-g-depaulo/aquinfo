// import { useMutation } from "react-query"
// import { api } from "."
// import axios from "axios"

// //post

// type Chuveiro = {
//     Modelo : string;
//     Consumo: Number;
//   };

//   type Chuveiro_get = {
//     Id : Number;
//     Modelo : string;
//     Consumo: Number;
//   };

//   async function PostChuveiro() {
//     try {

//       const { data } = await axios.post<Chuveiro>(
//         'https://reqres.in/api/users', //rota?
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//           },
//         },
//       );

//       console.log(JSON.stringify(data, null, 4));

//       return data;
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         console.log('error message: ', error.message);
//         return error.message;
//       } else {
//         console.log('unexpected error: ', error);
//         return 'An unexpected error occurred';
//       }
//     }
//   }

//   PostChuveiro();

// //get

// type GetChuveiroResponse = {
//     data: Chuveiro_get[];
//   };

//   async function getChuveiro() {
//     try {
//       const { data, status } = await axios.get<GetChuveiroResponse>(
//         'https://reqres.in/api/users',//rota?
//         {
//           headers: {
//             Accept: 'application/json',
//           },
//         },
//       );

//       console.log(JSON.stringify(data, null, 4));
//       console.log('response status is: ', status);

//       return data;
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         console.log('error message: ', error.message);
//         return error.message;
//       } else {
//         console.log('unexpected error: ', error);
//         return 'An unexpected error occurred';
//       }
//     }
//   }

//   getChuveiro();
// //delete

// type DeleteChuveiroResponse = '';

// async function deletechuveiro() {
//   try {
//     const { data, status } = await axios.delete<DeleteChuveiroResponse>(
//       'https://reqres.in/api/users/2', //rota
//       {
//         headers: {
//           Accept: 'application/json',
//         },
//       },
//     );

//     console.log('response is: ', data);
//     console.log('response status is: ', status);

//     return data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.log('error message: ', error.message);
//       return error.message;
//     } else {
//       console.log('unexpected error: ', error);
//       return 'An unexpected error occurred';
//     }
//   }
// }

// deletechuveiro();

// //put

//   async function updateChuveiro() {
//     try {
//       const { data } = await axios.put<Chuveiro>(
//         'https://reqres.in/api/users/2', //rota
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//           },
//         },
//       );

//       console.log(JSON.stringify(data, null, 4));

//       return data;
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         console.log('error message: ', error.message);
//         return error.message;
//       } else {
//         console.log('unexpected error: ', error);
//         return 'An unexpected error occurred';
//       }
//     }
//   }

//   updateChuveiro();
export {}
