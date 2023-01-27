
export default function Card() {
    return(
        <section className="card">
            <img className="card-image" src="../images/mount fuji.jpg" alt="mount fuji"/>
            <div className="location">
                <img className="location-icon" src="/" alt="location icon"/>
                <p className="location-name">JAPAN</p>
                <a className="location-link" href="/">View on Google Maps</a>
            </div>
        </section>
    )
}