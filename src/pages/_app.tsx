import '../styles/global.css'
import { ChallengesProvider } from '../context/ChallengeContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
