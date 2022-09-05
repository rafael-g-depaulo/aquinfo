import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useIsLoggedIn } from "../api/isLoggedIn"
import { Header } from "../components/Header"
import { Button } from "../components/Button"
import styled from "styled-components"

// =================================== Begin Styles =====================================================

// =================================== End of Styles =====================================================

const BackofficeFront = () => {
  const isLoggedIn = true // mocked

  const [descargasData, setDescargasData] = useState([])

  const router = useRouter()

  // go to /home if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      console.log(isLoggedIn)

      router.replace("/home")
    }
  }, [router, isLoggedIn])

  // change page name
  useEffect(() => {
    document.title = "Área Admin"
  }, [])

  // fetched data, mocked for now
  useEffect(() => {
    const fetchedDescargaData = [
      {
        id: 1,
        name: "Válvula",
        type: [
          { seconds: 3, totalWaterCost: 5 },
          { seconds: 7, totalWaterCost: 15 },
        ],
        image: null,
      },
      {
        id: 2,
        name: "Caixa Elevada",
        type: [
          { seconds: 4, totalWaterCost: 4 },
          { seconds: 10, totalWaterCost: 10 },
        ],
        image: null,
      },
      {
        id: 3,
        name: "Caixa Acoplada",
        type: [
          { seconds: 5, totalWaterCost: 10 },
          { seconds: 8, totalWaterCost: 20 },
        ],
        image: null,
      },
    ]

    setDescargasData(fetchedDescargaData)
  }, [])

  console.log(descargasData)

  return (
    <>
      <Header></Header>
      <main>
        <section id="descargas">
          <h1>Descargas</h1>
          <div>
            <div>
              <h3>Modelos Cadastrados</h3>
              <Button>Registrar Novo Modelo</Button>
            </div>

            {descargasData.map((descarga) => (
              <div key={descarga.id}>
                <p>{descarga.name}</p>
                <br />
              </div>
            ))}
            
          </div>
        </section>
        <section id="chuveiros">
          <h1>Chuveiros</h1>
          <div>
            <div>
              <h3>Modelos Cadastrados</h3>
              <Button>Registrar Novo Modelo</Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default BackofficeFront
