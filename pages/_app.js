import '../styles/global.css'
import '../styles/app.css'
import '../styles/header.css'
import '../styles/movie.css'
import '../styles/movies.css'
import '../styles/navigation.css'
import Header from '../components/header'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
