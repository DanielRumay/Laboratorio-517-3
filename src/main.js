const Main = () => {
    return (
        <main>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMbPG4cFXPXBbkxIPcAJskY7sF679oGj5dbq4K_YCWw&s" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://explore.zoom.us/media/acc-feature01.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.zoom.com/contentassets/fde9f1d3f5574877a5e58bb2ff94cca7/aic-meeting-questions-blog-image.jpg?t=20240416030002" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </main>
    );
}

export default Main;

