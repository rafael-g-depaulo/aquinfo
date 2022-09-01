import { AppProps } from "next/app"
import Head from "next/head"
import { ReactQueryContext } from "../contexts/ReactQuery"
import { UserTokenContext } from "../contexts/UserToken"
import "./styles.css"

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to front!</title>
      </Head>
      <ReactQueryContext>
        <UserTokenContext>
          <main className="app">
            <Component {...pageProps} />
          </main>
        </UserTokenContext>
      </ReactQueryContext>
    </>
  )
}

export default CustomApp
