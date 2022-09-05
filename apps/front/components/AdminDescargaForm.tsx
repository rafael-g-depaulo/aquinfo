import { useState, useEffect } from "react"
import styled from "styled-components"

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

const AdminDescargaForm = ({ selectedFile, setSelectedFile }) => {
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
            <StyledInput name="nome" type="text" />
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
        <FormVazaoWrapper>
          <VazaoFieldsWrapper>
            <FormControl>
              <StyledLabel htmlFor="seconds">Segundos Pressionados</StyledLabel>
              <StyledInput name="seconds" type="number" shortened />
            </FormControl>
            <FormControl>
              <StyledLabel htmlFor="water">Água gasta (em L)</StyledLabel>
              <StyledInput name="water" type="number" shortened />
            </FormControl>
          </VazaoFieldsWrapper>
          <VazaoAddButton
            onClick={(e) => {
              console.log("Adicionou")
            }}
          >
            Adicionar Vazão
          </VazaoAddButton>
          <FormVazaoArea></FormVazaoArea>
        </FormVazaoWrapper>
      </FormBody>
    </StyledForm>
  )
}

export default AdminDescargaForm
