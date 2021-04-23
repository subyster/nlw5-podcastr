import { PlayerProvider } from '../hooks/usePlayer'
import { Header } from '../components/Header'
import { Player } from '../components/Player'

import '../styles/global.scss'

import styles from '../styles/app.module.scss'

function MyApp({ Component, pageProps }) {
  return (
    <PlayerProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>

        <Player />
      </div>
    </PlayerProvider>
  )
}

export default MyApp

// missaoespacial
// embuscadoproximonivel
// astronautas
// universoinfinito
// missaocumprida