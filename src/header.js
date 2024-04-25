const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);

const Header = () => {
    return (
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><i data-feather="video"></i> ZOOM</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">¿Ya tiene una cuenta?</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">ingresar</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Español
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Español</a></li>
                    <li><a className="dropdown-item" href="#">English</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Otros idiomas...</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">soporte</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
  
  export default Header;
  