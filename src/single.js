import Zoom from './data/zoom.json'

const Single = () => {

    const currentRoute = window.location.pathname;
    const zoom = Zoom.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{zoom.name}</h1>
        <hr></hr>
        <img src={zoom.picture}></img>
        <p>{zoom.description}</p>
    </>);
}

export default Single;