const Footer = () => {
    const footerStyle = {
        textAlign: 'center',
        fontSize: '14px',
        lineHeight: '1.5',
        marginTop: '20px',
    };

    return (
        <footer style={footerStyle}>
            <p>
                Copyright ©2024 Zoom Video Communications, Inc. Todos los derechos reservados.
                <br />
                Términos Privacidad Centro de confianza Directrices de uso aceptable Legal y cumplimiento Sus opciones de privacidad Preferencias de cookies
            </p>
        </footer>
    );
}

export default Footer;
