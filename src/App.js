import av from './av.png';
import cashdrop from './cashdrop.PNG';
import goldenhouse from './goldenhouse.PNG';
import handsel from './handsel.png';
import instaboost from './instaboost.PNG';
import onas from './wszystkonas.png';
import './App.css';
import Typist from 'react-typist';
import 'flexboxgrid';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function App() {

  
  return (
    <div className="App">
      <nav>
        <div class="container container--nav">
        <div class="nav__logo"><a id="a" href="#home" aria-current="page" class="nav__logo__link">Jan Milewczyk</a></div>
        <div class="nav__menu">
				<a href="#about" class="nav__link">Doświadczenie</a>
        <a href="#projects" class="nav__link">Projekty</a>
      <a href="https://github.com/zzzjano" class="nav__link">GitHub</a>
				</div>
        <a href="mailto:milewczykjan@gmail.com" class="cta-link cta__link--nav ix--cta w-inline-block">
				<div>Kontakt</div>
				<div class="cta-link-icon w-embed"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
						<path stroke-linejoin="round" stroke-linecap="round" stroke-width="3.5" stroke="currentColor" d="M8 20L16 12L8 4"></path>
					</svg></div>
			</a>
        </div>
      </nav>
      <div className="App-header">
        <div class="container container--header">
        <div class="img-wrap">
        <div class="img-container">
        <img src={av} className="h-img" alt="logo" />
        </div>
        <div id="img-shadow-1" class="img-shadow-wrap">
									<div class="img-shadow"></div>
								</div>
                <div id="img-shadow-2" class="img-shadow-wrap img-shadow-wrap--intro">
									<div class="img-shadow"></div>
								</div>
        </div>
        <Typist startDelay={799} cursor={{ show: false }}>
        <h2>
          Jan Milewczyk
        </h2>
        </Typist>
        <Typist startDelay={799} cursor={{ show: false }}>
        <h3>Web Developer</h3>
        </Typist>
        </div>
      </div>
      {/*<section class="section section--manifest">
			<div class="section-header section-header--intro">
				<h2 class="fluid-gradient-heading fluid-gradient-headingo cc-en">Kreatywne rozwiązania</h2>
			</div>
		</section>*/}
      <section id="experience">
      <div class="section-header">
      <h2 class="section-heading reveal">Doświadczenie</h2>
      </div>
      <div class="container container--large">
      <div class="wrapper" id="revealcards">
  <div class="card">
    <div class="card-stats">
      <div class="card-stats-time card-stats-time--first"><div class="stats-dot-enabled"></div><div class="stats-dot-enabled"></div><div class="stats-dot-enabled"></div><div class="stats-dot-enabled"></div><div class="stats-dot-enabled"></div></div>
    </div>
    <div class="card-stats-small">Doświadczenie w:</div>
    <h1 class="card-stats-title">HTML</h1>
  </div>
  <div class="card">
    <div class="card-stats">
      <div class="card-stats-time card-stats-time--first"><div class="stats-dot-enabled"></div><div class="stats-dot-enabled"></div><div class="stats-dot-enabled"></div><div class="stats-dot-enabled"></div><div class="stats-dot-disabled"></div></div>
    </div>
    <div class="card-stats-small">Doświadczenie w:</div>
    <h1 class="card-stats-title">CSS</h1>
  </div>
  <div class="card">
    <div class="card-stats">
      <div class="card-stats-time card-stats-time--first"><div class="stats-dot-enabled"></div><div class="stats-dot-enabled"></div><div class="stats-dot-enabled"></div><div class="stats-dot-disabled"></div><div class="stats-dot-disabled"></div></div>
    </div>
    <div class="card-stats-small">Doświadczenie w:</div>
    <h1 class="card-stats-title">JavaScript</h1>
  </div>
        <div class="card">
    <div class="card-stats">
      <div class="card-stats-time card-stats-time--first"><div class="stats-dot-enabled"></div><div class="stats-dot-enabled"></div><div class="stats-dot-enabled"></div><div class="stats-dot-disabled"></div><div class="stats-dot-disabled"></div></div>
    </div>
    <div class="card-stats-small">Doświadczenie w:</div>
    <h1 class="card-stats-title">PHP</h1>
  </div>
  <div class="card">
    <div class="card-stats">
      <div class="card-stats-time card-stats-time--first"><div class="stats-dot-enabled"></div><div class="stats-dot-enabled"></div><div class="stats-dot-enabled"></div><div class="stats-dot-disabled"></div><div class="stats-dot-disabled"></div></div>
    </div>
    <div class="card-stats-small">Doświadczenie w:</div>
    <h1 class="card-stats-title">Node.js</h1>
  </div>
    <div class="card">
    <div class="card-stats">
      <div class="card-stats-time card-stats-time--first"><div class="stats-dot-enabled"></div><div class="stats-dot-enabled"></div><div class="stats-dot-disabled"></div><div class="stats-dot-disabled"></div><div class="stats-dot-disabled"></div></div>
    </div>
      <div class="card-stats-small">Doświadczenie w:</div>
    <h1 class="card-stats-title">React</h1>
  </div>
          <div class="card">
    <div class="card-stats">
      <div class="card-stats-time card-stats-time--first"><div class="stats-dot-enabled"></div><div class="stats-dot-enabled"></div><div class="stats-dot-disabled"></div><div class="stats-dot-disabled"></div><div class="stats-dot-disabled"></div></div>
    </div>
      <div class="card-stats-small">Doświadczenie w:</div>
    <h1 class="card-stats-title">Python</h1>
  </div>
</div>
      </div>
      </section>
      <section id="projects">
      <div class="section-header">
      <h2 class="section-heading-center reveal">Projekty</h2>
      </div>
      <div class="container container--large">
        <div class="projects">
        <Carousel showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true}>
        <div class="card">
          <div class="card-header">
            <a href="https://cashdrop.pl" class="card-projects-title">Cashdrop</a>
            <div class="card-description">Strona, która umożliwia użytkownikom zdobycie rozmaitych przedmiotów wirtualnych wzamian za wykonywanie zadań. Wraz z panelem administratora oraz systemem wypłat.</div>
            </div>
            <img src={cashdrop}></img>
  </div>
  <div class="card">
  <div class="card-header">
            <a href="https://instaboost.pl" class="card-projects-title">Instaboost</a>
            <div class="card-description">Wykonano design, system afiliacyjny oraz wprowadzono szybkie płatności. </div>
            </div>
            <img src={instaboost}></img>
  </div>
  <div class="card">
  <div class="card-header">
            <a href="https://wszystkonas.pl" class="card-projects-title">wszystkonas</a>
            <div class="card-description">Prosta wizytówka dla profilu Instagram. </div>
            </div>
            <img src={onas}></img>
  </div>
  <div class="card">
  <div class="card-header">
            <a href="https://handsel.pl" class="card-projects-title">Handsel</a>
            <div class="card-description">Wizytówka firmy. </div>
            </div>
            <img src={handsel}></img>
          </div>
  <div class="card">
  <div class="card-header">
            <a href="https://goldenhouse-jk.pl" class="card-projects-title">GoldenHouse-JK</a>
            <div class="card-description">Wizytówka firmy. </div>
            </div>
            <img src={goldenhouse}></img>
  </div>
  </Carousel>
        </div>
      </div>
      </section>
    </div>
  );
}

export default App;
