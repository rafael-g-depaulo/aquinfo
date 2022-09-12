import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useRef, useEffect, useState } from "react"
import styled from "styled-components"

const defaultImage = "/assets/shower.png"

// =================================== Begin Styles ======================================================
const Background = styled.div<{ render?: boolean }>`
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.render ? "#333333cc" : "#cccccc00")};
  transition-duration: 0.5s;
`
const Card = styled.div`
  display: flex;
  position: relative;
  width: 80%;
  height: 80%;
  background-color: #d2dddd;
  border-radius: 30px;
  z-index: 10;
  flex-direction: column;
  padding: 3rem 5rem 5rem;
  color: #000000;
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 0 5px;
  justify-content: center;
  border-bottom: solid 1px #000000;
`
const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  font-weight: 500;
`
const Body = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`
const Button = styled.button`
  margin: 1.5rem 1rem;
  padding: 0 1rem;
  width: 50%;
  max-width: 440px;
  height: 40px;
  background-color: #76fac7;
  border-radius: 100px;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  color: #000000;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  :hover {
    background-color: #53d8a5;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  :disabled {
    background-color: #e6f3ee33;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
  }
  transition-duration: 0.3s;
`
const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`

const StyledLabel = styled.label`
  font-size: 1rem;
  width: 100%;
`

const StyledInput = styled.input<{ shortened?: boolean }>`
  width: ${(props) => (props.shortened ? "3rem" : "100%")};
  border-radius: 30px;
  border: 1px solid #76fac7;
  padding: 0.3rem 0.5rem;
  margin-top: 5px;
  font-size: 1rem;
`
const StyledSelect = styled.select<{ shortened?: boolean }>`
  width: ${(props) => (props.shortened ? "3rem" : "100%")};
  border-radius: 30px;
  border: 1px solid #76fac7;
  padding: 0.3rem 0.5rem;
  margin-top: 5px;
  font-size: 1rem;
`
const StyledImg = styled(Image)`
  display: flex;
  margin: 5px 0;
  border: 1px solid #336666;
  border-radius: 100%;
`
// =================================== End of Styles =====================================================

const CalculatorModal = ({
  setToggleModal,
  chuveirosData = [],
  descargasData = [],
  consumoList,
  setConsumoList,
}) => {
  const [render, setRender] = useState(false)
  const [formType, setFormType] = useState(0)
  const wrapperRef = useRef(null)

  const [chuveiroMinutes, setChuveiroMinutes] = useState(0)
  const [chuveiroModelSelect, setChuveiroModelSelect] = useState(0)

  const [descargaPressed, setDescargaPressed] = useState(0)
  const [descargaModelSelect, setDescargaModelSelect] = useState(0)
  const [descargaTypeSelect, setDescargaTypeSelect] = useState(0)

  // effect for smooth animation
  useEffect(() => {
    setRender(true)
  }, [])

  // detects click outside of modal to close it
  // https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setToggleModal(false)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [ref])
  }
  useOutsideAlerter(wrapperRef)

  function handleChuveiroSubmit() {
    const consumoListId = Date.now()
    const chuveiroId = chuveiroModelSelect
    let name
    let waterPerMinute
    const minutesPressed = chuveiroMinutes
    const image = null
    chuveirosData.forEach((c) => {
      if (c.id === chuveiroId) {
        name = c.name
        waterPerMinute = c.waterPerMinute
      }
    })

    const newConsumo = {
      id: consumoListId,
      name,
      waterPerMinute,
      image,
      minutesPressed,
    }

    setConsumoList([...consumoList, newConsumo])
    setToggleModal(false)
  }

  function handleDescargaSubmit() {
    const consumoListId = Date.now()
    const descargaId = descargaModelSelect
    const typeId = descargaTypeSelect
    let descargaObject
    let typeObject
    const timesPressed = descargaPressed
    const image = null
    descargasData.forEach((d) => {
      if (d.id === descargaId) {
        descargaObject = d
        d.type.forEach((t) => {
          if (t.id === typeId) {
            typeObject = t
          }
        })
      }
    })

    const newConsumo = {
      id: consumoListId,
      name: descargaObject.name,
      type: typeObject,
      image,
      timesPressed,
    }

    setConsumoList([...consumoList, newConsumo])
    setToggleModal(false)
  }

  return (
    <>
      <Background render={render}>
        <Card ref={wrapperRef}>
          <FontAwesomeIcon
            icon={faClose}
            color="red"
            size="2x"
            onClick={() => {
              setToggleModal(false)
            }}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: 10,
              right: 30,
            }}
          />
          <TitleWrapper>
            <Title>
              Adicionar{" "}
              {formType === 0
                ? "Consumo"
                : formType === 1
                ? "Chuveiro"
                : "Descarga"}
            </Title>
          </TitleWrapper>
          <Body>
            {formType === 0 && (
              <>
                <Button
                  onClick={() => {
                    setFormType(1)
                  }}
                >
                  CHUVEIROS
                </Button>
                <Button
                  onClick={() => {
                    setFormType(2)
                  }}
                >
                  DESCARGAS
                </Button>
              </>
            )}
            {formType === 1 && (
              <>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <StyledImg
                    src={defaultImage}
                    alt="model image"
                    width={130}
                    height={130}
                  />
                  <FormControl>
                    <StyledLabel>Modelo</StyledLabel>
                    <StyledSelect
                      defaultValue={-1}
                      onChange={(e) => {
                        setChuveiroModelSelect(parseInt(e.target.value))
                      }}
                    >
                      <option value="-1" disabled>
                        Selecione...
                      </option>
                      {chuveirosData.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </StyledSelect>
                  </FormControl>
                </div>
                <FormControl>
                  <StyledLabel>
                    Quantos minutos por dia, em média, você utiliza o chuveiro?
                  </StyledLabel>
                  <StyledInput
                    type="number"
                    min={0}
                    value={chuveiroMinutes}
                    onChange={(e) => {
                      setChuveiroMinutes(parseInt(e.target.value))
                    }}
                  ></StyledInput>
                </FormControl>
                <Button
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "0 auto",
                  }}
                  disabled={
                    chuveiroModelSelect > 0 && chuveiroMinutes > 0
                      ? false
                      : true
                  }
                  onClick={() => {
                    handleChuveiroSubmit()
                  }}
                >
                  Adicionar
                </Button>
              </>
            )}
            {formType === 2 && (
              <>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <StyledImg
                    src={defaultImage}
                    alt="model image"
                    width={130}
                    height={130}
                  />
                  <FormControl>
                    <StyledLabel>Modelo</StyledLabel>
                    <StyledSelect
                      defaultValue={-1}
                      onChange={(e) => {
                        setDescargaModelSelect(parseInt(e.target.value))
                      }}
                    >
                      <option value="-1" disabled>
                        Selecione...
                      </option>
                      {descargasData.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.name}
                        </option>
                      ))}
                    </StyledSelect>
                  </FormControl>
                </div>

                {descargaModelSelect <= 0 && (
                  <FormControl>
                    <StyledLabel>Modo de Uso</StyledLabel>
                    <StyledSelect
                      defaultValue={-1}
                      disabled={true}
                      onChange={(e) => {
                        setDescargaTypeSelect(parseInt(e.target.value))
                      }}
                    >
                      <option value="-1" disabled>
                        Selecione um modelo antes
                      </option>
                    </StyledSelect>
                  </FormControl>
                )}

                {descargaModelSelect > 0 && (
                  <FormControl>
                    <StyledLabel>Modo de Uso</StyledLabel>
                    <StyledSelect
                      defaultValue={-1}
                      disabled={false}
                      onChange={(e) => {
                        setDescargaTypeSelect(parseInt(e.target.value))
                      }}
                    >
                      <option value="-1" disabled>
                        Selecione...
                      </option>
                      {descargasData
                        .filter((d) => d.id === descargaModelSelect)[0]
                        .type.map((t) => (
                          <option key={t.id} value={t.id}>
                            Pressionado por {t.seconds} segundos
                          </option>
                        ))}
                    </StyledSelect>
                  </FormControl>
                )}

                <FormControl>
                  <StyledLabel>
                    Quantos vezes por dia, em média, você aciona a descarga?
                  </StyledLabel>
                  <StyledInput
                    type="number"
                    min={0}
                    value={descargaPressed}
                    onChange={(e) => {
                      setDescargaPressed(parseInt(e.target.value))
                    }}
                  ></StyledInput>
                </FormControl>
                <Button
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "0 auto",
                  }}
                  disabled={
                    descargaModelSelect > 0 &&
                    descargaPressed > 0 &&
                    descargaTypeSelect > 0
                      ? false
                      : true
                  }
                  onClick={() => {
                    handleDescargaSubmit()
                  }}
                >
                  Adicionar
                </Button>
              </>
            )}
          </Body>
        </Card>
      </Background>
    </>
  )
}

export default CalculatorModal
