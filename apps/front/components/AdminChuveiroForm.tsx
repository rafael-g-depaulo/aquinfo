import { useState, useEffect } from "react"
import styled from "styled-components"

// ================================== Begin Styles =========================================

const StyledForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0px 0 15px;
  padding: 10px;
`

const FormTitle = styled.h5`
  margin: 10px;
  font-size: 0.8rem;
  font-weight: 700;
`

const FormBody = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`

const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const FormVazaoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const FormVazaoArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  background-color: #e4e4e4;
  border: 1px solid #336666;
  border-radius: 30px;
  overflow-y: auto;
  align-items: center;
`

const VazaoFieldsWrapper = styled.div`
  display: flex;
`

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`

const StyledLabel = styled.label`
  font-size: 0.7rem;
  width: 100%;
`

const StyledInput = styled.input<{ shortened?: boolean }>`
  width: ${(props) => (props.shortened ? "3rem" : "100%")};
  border-radius: 30px;
  border: 1px solid #76fac7;
  padding: 0.3rem 0.5rem;
  margin-top: 5px;
`

const VazaoAddButton = styled.button`
  padding: 0.2rem 0.5rem;
  margin: 5px;
  width: 5rem;
  min-height: 20px;
  background-color: #336666;
  border-radius: 100px;
  font-family: sans-serif;
  font-weight: 500;
  font-size: 0.7rem;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  :hover {
    background-color: #295757;
  }
`

const StyledImg = styled.img`
  display: flex;
  margin: 5px 0;
  width: 130px;
  height: 130px;
  border: 1px solid #336666;
  border-radius: 50%;
`

const VazaoCard = styled.div`
  width: 90%;
  background-color: #ffffff;
  border-radius: 30px;
  span {
    font-size: 0.6rem;
    margin: 8px;
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
`

const FormButton = styled.button`
  padding: 0.2rem 0.5rem;
  margin: 5px;
  max-width: 10rem;
  min-height: 40px;
  background-color: #76fac7;
  border-radius: 100px;
  font-family: sans-serif;
  font-weight: 500;
  font-size: 0.7rem;
  text-align: center;
  color: #000000;
  cursor: pointer;
  :hover {
    background-color: #6fdab1;
  }
`
// ================================== End of Styles =========================================

const AdminChuveiroForm = ({
  selectedFile,
  setSelectedFile,
  chuveiroName,
  setChuveiroName,
  waterCostPerMinute,
  setWaterCostPerMinute,
  handleChuveiroFormSubmit,
}) => {
  const [preview, setPreview] = useState<string | undefined>()

  // https://stackoverflow.com/questions/38049966/get-image-preview-before-uploading-in-react
  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0])
  }

  return (
    <StyledForm>
      <FormTitle>Novo Modelo</FormTitle>
      <FormBody>
        <FormFieldWrapper>
          <FormControl>
            <StyledLabel htmlFor="nome">Nome do Modelo</StyledLabel>
            <StyledInput
              name="nome"
              type="text"
              required
              value={chuveiroName}
              onChange={(e) => {
                setChuveiroName(e.target.value)
              }}
            />
          </FormControl>
          <FormControl>
            <StyledLabel htmlFor="nome">
              Consumo de Água por minuto (em L)
            </StyledLabel>
            <StyledInput
              name="consumo"
              type="number"
              required
              shortened
              value={waterCostPerMinute}
              onChange={(e) => {
                setWaterCostPerMinute(e.target.value)
              }}
            />
          </FormControl>
          <FormControl>
            <StyledLabel htmlFor="imagem">Imagem</StyledLabel>
            <StyledInput
              name="imagem"
              accept="image/*"
              type="file"
              onChange={onSelectFile}
              style={{ cursor: "pointer" }}
            />
            {selectedFile && (
              <StyledImg src={preview} alt="selected image preview" />
            )}
          </FormControl>
        </FormFieldWrapper>
      </FormBody>
      <FormButton
        onClick={(e) => {
          handleChuveiroFormSubmit(e)
        }}
      >
        Cadastrar Modelo
      </FormButton>
    </StyledForm>
  )
}

export default AdminChuveiroForm
