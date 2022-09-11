import { useEffect, useState } from "react"
import { useRouter } from "next/router"
// import { useIsLoggedIn } from "../api/isLoggedIn"
import { Header } from "../components/Header"
import styled from "styled-components"
import AdminDescargaForm from "../components/AdminDescargaForm"
import { createDescarga, useDescargas } from "../api/createDescarga"
import AdminChuveiroForm from "../components/AdminChuveiroForm"
import { ChuveiroType, createChuveiro } from "../api/createChuveiro"
import { useShower, useShowers } from "../api/shower"
import { FlushSystemEntity } from "@water-calc"
import { useIsLoggedIn } from "../api/isLoggedIn"
import { useUserToken } from "../contexts/UserToken"

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
const SectionItemCard = styled.div`
  /* width: 90%; */
  background-color: #e3fff4;
  border-radius: 30px;
  span {
    font-size: 1rem;
    font-weight: 500;
    margin: 12px;
  }
  margin: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    color: red;
    background-color: transparent;
    width: 30px;
    height: 30px;
    text-align: center;
    cursor: pointer;
  }
  > div span {
    font-size: 0.7rem;
  }
`
// =================================== End of Styles =====================================================

const BackofficeFront = () => {
  const isLoggedIn = true

  const { token } = useUserToken()

  const { data: descargasData } = useDescargas()
  const [toggleDescargasForm, setToggleDescargasForm] = useState(false)

  const { data: chuveirosData } = useShowers()
  const [toggleChuveirosForm, setToggleChuveirosForm] = useState(false)

  // descarga form values
  const [selectedFileDescarga, setSelectedFileDescarga] = useState()
  const [descargaName, setDescargaName] = useState("")
  const [seconds, setSeconds] = useState(0)
  const [waterCost, setWaterCost] = useState(0)
  const [vazaoOptions, setVazaoOptions] = useState([])

  // chuveiro form values
  const [selectedFileChuveiro, setSelectedFileChuveiro] = useState()
  const [chuveiroName, setChuveiroName] = useState("")
  const [waterCostPerMinute, setWaterCostPerMinute] = useState(0)

  const router = useRouter()

  console.log("data", descargasData)
  console.log("data2", chuveirosData)

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

  function clearDescargaForm() {
    setSelectedFileDescarga(undefined)
    setDescargaName("")
    setVazaoOptions([])
    setSeconds(0)
    setWaterCost(0)
  }

  function clearChuveiroForm() {
    setSelectedFileChuveiro(undefined)
    setChuveiroName("")
    setWaterCostPerMinute(0)
  }

  function handleToggleDescargasFormClick() {
    clearDescargaForm()
    setToggleDescargasForm(!toggleDescargasForm)
  }

  function handleToggleChuveirosFormClick() {
    clearChuveiroForm()
    setToggleChuveirosForm(!toggleChuveirosForm)
  }

  async function handleDescargaFormSubmit(e) {
    e.preventDefault()
    if (descargaName != "") {
      const newDescarga = {
        name: descargaName,
        image: selectedFileDescarga,
        type: vazaoOptions,
        id: Date.now(),
      }

      createDescarga(newDescarga, token).then(() => {
        clearDescargaForm()
        setToggleDescargasForm(!toggleDescargasForm)
      })
    }
  }

  async function handleChuveiroFormSubmit(e) {
    e.preventDefault()
    if (chuveiroName !== "" && waterCostPerMinute > 0) {
      const newChuveiro: ChuveiroType = {
        name: chuveiroName,
        image: selectedFileChuveiro,
        waterPerMinute: waterCostPerMinute,
        id: Date.now(),
      }

      createChuveiro(newChuveiro).then(() => {
        clearChuveiroForm()
        setToggleChuveirosForm(!toggleChuveirosForm)
      })
    }
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
                  descargaName={descargaName}
                  setDescargaName={setDescargaName}
                  seconds={seconds}
                  setSeconds={setSeconds}
                  waterCost={waterCost}
                  setWaterCost={setWaterCost}
                  vazaoOptions={vazaoOptions}
                  setVazaoOptions={setVazaoOptions}
                  handleDescargaFormSubmit={handleDescargaFormSubmit}
                />
              )}

              {descargasData &&
                descargasData.map((descarga) => (
                  <SectionItemCard key={descarga.id}>
                    <span>{descarga.name}</span>
                    <div>
                      {(console.log("asdasd", descarga), (<></>))}
                      <span>{descarga.type.length} opções de vazão</span>
                    </div>
                  </SectionItemCard>
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

              {toggleChuveirosForm && (
                <AdminChuveiroForm
                  selectedFile={selectedFileChuveiro}
                  setSelectedFile={setSelectedFileChuveiro}
                  chuveiroName={chuveiroName}
                  setChuveiroName={setChuveiroName}
                  waterCostPerMinute={waterCostPerMinute}
                  setWaterCostPerMinute={setWaterCostPerMinute}
                  handleChuveiroFormSubmit={handleChuveiroFormSubmit}
                />
              )}

              {chuveirosData &&
                chuveirosData.map((chuveiro) => (
                  <SectionItemCard key={chuveiro.id}>
                    <span>{chuveiro.name}</span>
                  </SectionItemCard>
                ))}
            </div>
          </Section>
        </SectionWrapper>
      </Main>
    </>
  )
}

export default BackofficeFront
