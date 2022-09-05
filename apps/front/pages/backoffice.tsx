import { useEffect, useState } from "react"
import { useRouter } from "next/router"
// import { useIsLoggedIn } from "../api/isLoggedIn"
import { Header } from "../components/Header"
import styled from "styled-components"
import AdminDescargaForm from "../components/AdminDescargaForm"

// =================================== Begin Styles =====================================================

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 30px 5%;
`

const PageTitle = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  color: #336666;
`

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin: 40px 0;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #f1ffff;
  border-radius: 10px;
  padding: 10px 40px;
  :first-of-type {
    border: none;
    border-right: 1px solid lightgray;
    margin-right: 5px;
  }
`

const SectionTitle = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #005e99;
`

const ModelTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0 25px;
`

const SectionButton = styled.button<{ toggled?: boolean }>`
  padding: 0 1rem;
  min-width: 5rem;
  height: 40px;
  background-color: ${(props) => (props.toggled ? "#700404" : "#00d7dc")};
  border-radius: 100px;
  font-family: sans-serif;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  color: ${(props) => (props.toggled ? "#ffffff" : "#000000")};
  cursor: pointer;
  :hover {
    background-color: ${(props) => (props.toggled ? "#550404" : "#00c9cc")};
  }
`

// =================================== End of Styles =====================================================

const BackofficeFront = () => {
  const isLoggedIn = true // mocked

  const [descargasData, setDescargasData] = useState([])
  const [toggleDescargasForm, setToggleDescargasForm] = useState(false)

  const [chuveirosData, setChuveirosData] = useState([])
  const [toggleChuveirosForm, setToggleChuveirosForm] = useState(false)

  // descarga form values
  const [selectedFileDescarga, setSelectedFileDescarga] = useState()

  // chuveiro form values
  const [selectedFileChuveiro, setSelectedFileChuveiro] = useState()

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

    const fetchedChuveiroData = [
      {
        id: 1,
        name: "Elétrico",
        waterPerMinute: 4,
        image: null,
      },
    ]

    setDescargasData(fetchedDescargaData)
    setChuveirosData(fetchedChuveiroData)
  }, [])

  function clearDescargaForm(){
    setSelectedFileDescarga(undefined)
  }

  function clearChuveiroForm(){
    setSelectedFileChuveiro(undefined)
  }

  function handleToggleDescargasFormClick() {
    clearDescargaForm()
    setToggleDescargasForm(!toggleDescargasForm)
  }

  function handleToggleChuveirosFormClick() {
    clearChuveiroForm()
    setToggleChuveirosForm(!toggleChuveirosForm)
  }

  return (
    <>
      <Header></Header>
      <Main>
        <PageTitle>Área Administrador</PageTitle>
        <SectionWrapper>
          <Section id="descargas">
            <SectionTitle>Descargas</SectionTitle>
            <div>
              <ModelTitleContainer>
                <h3>Modelos Cadastrados</h3>
                <SectionButton
                  onClick={handleToggleDescargasFormClick}
                  toggled={toggleDescargasForm}
                >
                  {!toggleDescargasForm
                    ? "Registrar Novo Modelo"
                    : "Fechar Formulário"}
                </SectionButton>
              </ModelTitleContainer>

              {toggleDescargasForm && (
                <AdminDescargaForm
                  selectedFile={selectedFileDescarga}
                  setSelectedFile={setSelectedFileDescarga}
                />
              )}

              {descargasData.map((descarga) => (
                <div key={descarga.id}>
                  <p>{descarga.name}</p>
                </div>
              ))}
            </div>
          </Section>
          <Section id="chuveiros">
            <SectionTitle>Chuveiros</SectionTitle>
            <div>
              <ModelTitleContainer>
                <h3>Modelos Cadastrados</h3>
                <SectionButton
                  onClick={handleToggleChuveirosFormClick}
                  toggled={toggleChuveirosForm}
                >
                  {!toggleChuveirosForm
                    ? "Registrar Novo Modelo"
                    : "Fechar Formulário"}
                </SectionButton>
              </ModelTitleContainer>

              {chuveirosData.map((chuveiro) => (
                <div key={chuveiro.id}>
                  <p>{chuveiro.name}</p>
                </div>
              ))}
            </div>
          </Section>
        </SectionWrapper>
      </Main>
    </>
  )
}

export default BackofficeFront
