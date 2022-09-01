import { api } from "../../utils/api"
import styled from "styled-components"

interface Book {
  id: string
  title: string
  publishDate: Date
}
export interface HomePageProps {
  books: Book[]
}

const StyledHomePage = styled.div`
  color: #f8163c;
`

export const getStaticProps = async () => {
  const res = await api.get<Book[]>("/books")
  const data = res.data

  return { props: { books: data } }
}

export function HomePage({ books }: HomePageProps) {
  return (
    <StyledHomePage>
      <h1>Welcome to HomePage! API host is {`${process.env.NX_API_HOST}`}</h1>
      <p>look at the books i got from {process.env.NX_API_HOST}/book:</p>
      <pre>
        <code>{JSON.stringify(books, null, 2)}</code>
      </pre>
    </StyledHomePage>
  )
}

export default HomePage
