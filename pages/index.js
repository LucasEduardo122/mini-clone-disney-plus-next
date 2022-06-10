import Image from 'next/image'

export default function Home() {
  return (
    <div id="app">
      <div className="app__image">
        <Image id='image' loading="lazy" alt="Imagem do filme destaque" width={1000} height={1000} src="https://image.tmdb.org/t/p/original/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg" />
      </div>

      <header>
        <Image src="/assets/images/logo.png" width={150} height={100} alt="Logo da disney plus" />

        <button type="button" className="button__menu" onClick={() => {changeButtonMenu()}}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className="navigation">
          <h2>Movies</h2>

          <ul id="movies">

          </ul>
        </nav>
      </header>

      <main>
        <section className="feature__movie">
          <div className="rating">
            <Image src="/assets/images/logo-imdb.png" width={30} height={30} alt="Logo da IMDB" />
            <strong></strong>
          </div>

          <span></span>
          <h1></h1>
          <p></p>

          <button type="button">
            <Image src="/assets/images/icon-play.png" width={20} height={20} alt="Icon play" />
            Assistir agora
          </button>
        </section>

      </main>
    </div>
  )
}
