import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
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
                <Dropdown>
    <Dropdown.Toggle variant="Dropdown" id="dropdown-basic">
        Idioma <i data-feather="globe"></i>
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Español</Dropdown.Item>
        <Dropdown.Item href="#/action-2">English</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Deutsch</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

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
  