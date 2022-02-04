import { SessionProvider } from "next-auth/react"
import { appWithTranslation } from "next-i18next"
import type { AppProps } from "next/app"
import "./styles.css"

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default appWithTranslation(App)
