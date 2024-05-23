import Zoom from './data/zoom.json'

const Single = () => {

    const currentRoute = window.location.pathname;
    const zoom = Zoom.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1 className="AsideStyle">{zoom.name}</h1>
        <hr></hr>
        <img className='w-100'src={zoom.picture}></img>
        <h4 className="AsideStyle"><b><br/>{zoom.description}</b></h4>
    </>);
}

export default Single;