import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);

const Aside = () => {
    return (
        <aside className="AsideStyle">
            <h1><i data-feather="user-check"></i><b> REGISTRATE </b><i data-feather="user-plus"></i> </h1>
            <label><i data-feather="user"></i> Nombre completo</label>
            <br />
            <input className="wallfond" type="text" required />
            <br />
            <br />
            <label><i data-feather="mail"></i> Correo</label>
            <br />
            <input className="wallfond" type="email" required />
            <br />
            <br />
            <label><i data-feather="at-sign"></i> Confirmar correo</label>
            <br />
            <input className="wallfond" type="email" required />
            <br />
            <br />
            <label><i data-feather="lock"></i> Contraseña</label>
            <br />
            <input className="wallfond" type="password" required />
            <br />
            <br />
            <label><i data-feather="map"></i> Selecciona país</label>
            <br />
            <select className="Pais" name="pais">
    {[
        "Afganistán", "Albania", "Alemania", "Andorra", "Angola",
        "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina", "Armenia",
        "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés",
        "Barbados", "Baréin", "Bélgica", "Belice", "Benín",
        "Bielorrusia", "Birmania/Myanmar", "Bolivia", "Bosnia y Herzegovina", "Botsuana",
        "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi",
        "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá",
        "Catar", "Chad", "Chile", "China", "Chipre",
        "Ciudad del Vaticano", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur",
        "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca",
        "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos",
        "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos",
        "Estonia", "Etiopía", "Filipinas", "Finlandia", "Fiyi",
        "Francia", "Gabón", "Gambia", "Georgia", "Ghana",
        "Granada", "Grecia", "Guatemala", "Guyana", "Guinea",
        "Guinea ecuatorial", "Guinea-Bisáu", "Haití", "Honduras", "Hungría",
        "India", "Indonesia", "Irak", "Irán", "Irlanda",
        "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia",
        "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia",
        "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesoto",
        "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein",
        "Lituania", "Luxemburgo", "Macedonia del Norte", "Madagascar", "Malasia",
        "Malaui", "Maldivas", "Malí", "Malta", "Marruecos",
        "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia",
        "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Namibia",
        "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria",
        "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán",
        "Palaos", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú",
        "Polonia", "Portugal", "Reino Unido", "República Centroafricana", "República Checa",
        "República del Congo", "República Democrática del Congo", "República Dominicana", "República Sudafricana", "Ruanda",
        "Rumanía", "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino",
        "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia",
        "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia",
        "Sri Lanka", "Suazilandia", "Sudán", "Sudán del Sur", "Suecia",
        "Suiza", "Surinam", "Tailandia", "Tanzania", "Tayikistán",
        "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez",
        "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda",
        "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam",
        "Yemen", "Yibuti", "Zambia", "Zimbabue"
    ].map((pais, index) => (
        <option key={index} value={pais}>{pais}</option>
    ))}
</select>
            <br />
            <br />
            <button type="button" className="btn btn-primary">Crear cuenta</button>
        </aside>
    );
}

export default Aside;
