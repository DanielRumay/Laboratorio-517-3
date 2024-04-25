import './style.css';
import Carousel from 'react-bootstrap/Carousel';

const Main = () => {
    return (
        <main>
            <Carousel>
      <Carousel.Item>
      <img
                        className="carousel-image"
                        src="https://s1.eestatic.com/2020/03/26/invertia/mercados/bolsa-teletrabajo-mercados_477713998_149174031_1706x960.jpg"
                        alt="First slide"
                    />
        <Carousel.Caption>
          <h3 className="Letra"><b>ZOOM MEETING</b></h3>
          <p className="Letra"><b>Una sola plataforma para establecer una conexión humana sin límites</b></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
                        className="carousel-image"
                        src="https://explore.zoom.us/media/acc-feature01.png"
                        alt="Second slide"
                    />
        <Carousel.Caption>
          <h5 className="Letra2"><b>
            Logre que el trabajo en equipo resulte más significativo en equipos
            <br/>
          híbridos con soluciones de colaboración modernas
          </b></h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
                        className="carousel-image"
                        src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/04/hipertextual-zoom-deja-expuestos-miles-videos-internet-vulnerando-privacidad-sus-usuarios-2020603633.jpg?fit=1500%2C973&quality=50&strip=all&ssl=1"
                        alt="Third slide"
                    />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </main>
    );
}

export default Main;

